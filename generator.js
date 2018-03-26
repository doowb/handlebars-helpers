'use strict';

const fs = require('fs');
const path = require('path');
const File = require('vinyl');
const through = require('through2');
const comments = require('js-comments');
const exists = require('fs-exists-sync');

module.exports = function(app) {
  app.task('examples', function() {
    return app.src('lib/*.js')
      .pipe(examples(app))
      .pipe(app.dest('examples'));
  });
};

function examples(app) {
  const files = [];
  return through.obj(function(file, enc, next) {
    try {
      if (file.stem !== 'index') {
        files.push(file);
        let codeComments = comments.parse(file.contents.toString());
        file.comments = codeComments;
        for (let i = 0; i < codeComments.length; i++) {
          let code = codeComments[i];
          createConfigFile(file, code, this);
          createTemplateFile(file, code, this);
          createDataFile(file, code, this);
        }
      }
      next();
    } catch (err) {
      next(err);
    }
  }, function(cb) {
    let code = `
'use strict';

var fs = require('fs');
var path = require('path');

module.exports = {${files.reduce((acc, file) => {
    acc += `
  ${file.stem}: {${file.comments.reduce((acc2, comment) => {
      let dir = `./${file.stem}/${comment.context.name}`;
      acc2 += `
    ${comment.context.name}: {
      data: require('${dir}/data.json'),
      config: require('${dir}/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, '${dir}/template.hbs'), 'utf8')
    },\n`;
      return acc2;
    }, '').slice(0, -2)}
  },\n`;
  return acc;
  }, '').slice(0, -2)}
};
`;

    let file = new File({
      path: path.resolve(`./index.js`),
      base: app.cwd,
      cwd: app.cwd,
      contents: new Buffer(code)
    });
    this.push(file);
    cb();
  });
}

function createConfigFile(file, code, stream) {
  let fp = path.resolve(`./examples/${file.stem}/${code.context.name}/config.json`);
  if (exists(fp)) {
    return;
  }

  let config = {
    description: code.description && code.description.split('\n')[0].trim() || code.context.name
  };

  stream.push(new File({
    path: fp,
    base: file.base,
    cwd: file.cwd,
    contents: new Buffer(JSON.stringify(config, null, 2))
  }));
}

function createTemplateFile(file, code, stream) {
  let fp = path.resolve(`./examples/${file.stem}/${code.context.name}/template.hbs`);
  if (exists(fp)) {
    return;
  }

  let params = code.params && code.params.filter(param => param.name !== 'options').map(param => param.name) || [];
  let template = `{{${code.block ? '#' : ''}${code.context.name}${params.length ? ' ' + params.join(' ') : ''}}}\n`;
  if (code.block) {
    template += `{{/${code.context.name}}}\n`;
  }

  stream.push(new File({
    path: fp,
    base: file.base,
    cwd: file.cwd,
    contents: new Buffer(template)
  }));
}

function createDataFile(file, code, stream) {
  let fp = path.resolve(`./examples/${file.stem}/${code.context.name}/data.json`);
  if (exists(fp)) {
    return;
  }

  let params = code.params && code.params.filter(param => param.name !== 'options') || [];
  let data = params.reduce((acc, param) => {
    acc[param.name] = createData(param.type);
    return acc;
  }, {});

  stream.push(new File({
    path: fp,
    base: file.base,
    cwd: file.cwd,
    contents: new Buffer(JSON.stringify(data, null, 2))
  }));
}

function createData(type) {
  if (!type) return 'foo';

  switch (type.toLowerCase()) {
    case 'string':
      return 'bar'

    case 'object':
      return {foo: 'bar'}

    case 'array':
      return ['foo', 'bar', 'baz', 'qux'];

    case 'number':
      return 2;

    default:
      return 'bar';
  }
}
