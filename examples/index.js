
'use strict';

const fs = require('fs');
const path = require('path');

module.exports = {
  array: {
    after: {
      data: require('./array/after/data.json'),
      config: require('./array/after/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './array/after/template.hbs'), 'utf8')
    },

    arrayify: {
      data: require('./array/arrayify/data.json'),
      config: require('./array/arrayify/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './array/arrayify/template.hbs'), 'utf8')
    },

    before: {
      data: require('./array/before/data.json'),
      config: require('./array/before/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './array/before/template.hbs'), 'utf8')
    },

    eachIndex: {
      data: require('./array/eachIndex/data.json'),
      config: require('./array/eachIndex/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './array/eachIndex/template.hbs'), 'utf8')
    },

    filter: {
      data: require('./array/filter/data.json'),
      config: require('./array/filter/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './array/filter/template.hbs'), 'utf8')
    },

    first: {
      data: require('./array/first/data.json'),
      config: require('./array/first/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './array/first/template.hbs'), 'utf8')
    },

    forEach: {
      data: require('./array/forEach/data.json'),
      config: require('./array/forEach/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './array/forEach/template.hbs'), 'utf8')
    },

    inArray: {
      data: require('./array/inArray/data.json'),
      config: require('./array/inArray/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './array/inArray/template.hbs'), 'utf8')
    },

    isArray: {
      data: require('./array/isArray/data.json'),
      config: require('./array/isArray/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './array/isArray/template.hbs'), 'utf8')
    },

    itemAt: {
      data: require('./array/itemAt/data.json'),
      config: require('./array/itemAt/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './array/itemAt/template.hbs'), 'utf8')
    },

    join: {
      data: require('./array/join/data.json'),
      config: require('./array/join/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './array/join/template.hbs'), 'utf8')
    },

    equalsLength: {
      data: require('./array/equalsLength/data.json'),
      config: require('./array/equalsLength/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './array/equalsLength/template.hbs'), 'utf8')
    },

    last: {
      data: require('./array/last/data.json'),
      config: require('./array/last/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './array/last/template.hbs'), 'utf8')
    },

    length: {
      data: require('./array/length/data.json'),
      config: require('./array/length/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './array/length/template.hbs'), 'utf8')
    },

    lengthEqual: {
      data: require('./array/lengthEqual/data.json'),
      config: require('./array/lengthEqual/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './array/lengthEqual/template.hbs'), 'utf8')
    },

    map: {
      data: require('./array/map/data.json'),
      config: require('./array/map/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './array/map/template.hbs'), 'utf8')
    },

    pluck: {
      data: require('./array/pluck/data.json'),
      config: require('./array/pluck/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './array/pluck/template.hbs'), 'utf8')
    },

    reverse: {
      data: require('./array/reverse/data.json'),
      config: require('./array/reverse/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './array/reverse/template.hbs'), 'utf8')
    },

    some: {
      data: require('./array/some/data.json'),
      config: require('./array/some/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './array/some/template.hbs'), 'utf8')
    },

    sort: {
      data: require('./array/sort/data.json'),
      config: require('./array/sort/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './array/sort/template.hbs'), 'utf8')
    },

    sortBy: {
      data: require('./array/sortBy/data.json'),
      config: require('./array/sortBy/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './array/sortBy/template.hbs'), 'utf8')
    },

    withAfter: {
      data: require('./array/withAfter/data.json'),
      config: require('./array/withAfter/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './array/withAfter/template.hbs'), 'utf8')
    },

    withBefore: {
      data: require('./array/withBefore/data.json'),
      config: require('./array/withBefore/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './array/withBefore/template.hbs'), 'utf8')
    },

    withFirst: {
      data: require('./array/withFirst/data.json'),
      config: require('./array/withFirst/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './array/withFirst/template.hbs'), 'utf8')
    },

    withGroup: {
      data: require('./array/withGroup/data.json'),
      config: require('./array/withGroup/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './array/withGroup/template.hbs'), 'utf8')
    },

    withLast: {
      data: require('./array/withLast/data.json'),
      config: require('./array/withLast/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './array/withLast/template.hbs'), 'utf8')
    },

    withSort: {
      data: require('./array/withSort/data.json'),
      config: require('./array/withSort/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './array/withSort/template.hbs'), 'utf8')
    },

    unique: {
      data: require('./array/unique/data.json'),
      config: require('./array/unique/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './array/unique/template.hbs'), 'utf8')
    }
  },

  code: {
    embed: {
      data: require('./code/embed/data.json'),
      config: require('./code/embed/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './code/embed/template.hbs'), 'utf8')
    },

    gist: {
      data: require('./code/gist/data.json'),
      config: require('./code/gist/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './code/gist/template.hbs'), 'utf8')
    },

    jsfiddle: {
      data: require('./code/jsfiddle/data.json'),
      config: require('./code/jsfiddle/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './code/jsfiddle/template.hbs'), 'utf8')
    }
  },

  collection: {
    isEmpty: {
      data: require('./collection/isEmpty/data.json'),
      config: require('./collection/isEmpty/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './collection/isEmpty/template.hbs'), 'utf8')
    },

    iterate: {
      data: require('./collection/iterate/data.json'),
      config: require('./collection/iterate/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './collection/iterate/template.hbs'), 'utf8')
    }
  },

  comparison: {
    and: {
      data: require('./comparison/and/data.json'),
      config: require('./comparison/and/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './comparison/and/template.hbs'), 'utf8')
    },

    compare: {
      data: require('./comparison/compare/data.json'),
      config: require('./comparison/compare/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './comparison/compare/template.hbs'), 'utf8')
    },

    contains: {
      data: require('./comparison/contains/data.json'),
      config: require('./comparison/contains/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './comparison/contains/template.hbs'), 'utf8')
    },

    default: {
      data: require('./comparison/default/data.json'),
      config: require('./comparison/default/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './comparison/default/template.hbs'), 'utf8')
    },

    eq: {
      data: require('./comparison/eq/data.json'),
      config: require('./comparison/eq/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './comparison/eq/template.hbs'), 'utf8')
    },

    gt: {
      data: require('./comparison/gt/data.json'),
      config: require('./comparison/gt/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './comparison/gt/template.hbs'), 'utf8')
    },

    gte: {
      data: require('./comparison/gte/data.json'),
      config: require('./comparison/gte/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './comparison/gte/template.hbs'), 'utf8')
    },

    has: {
      data: require('./comparison/has/data.json'),
      config: require('./comparison/has/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './comparison/has/template.hbs'), 'utf8')
    },

    isFalsey: {
      data: require('./comparison/isFalsey/data.json'),
      config: require('./comparison/isFalsey/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './comparison/isFalsey/template.hbs'), 'utf8')
    },

    isTruthy: {
      data: require('./comparison/isTruthy/data.json'),
      config: require('./comparison/isTruthy/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './comparison/isTruthy/template.hbs'), 'utf8')
    },

    ifEven: {
      data: require('./comparison/ifEven/data.json'),
      config: require('./comparison/ifEven/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './comparison/ifEven/template.hbs'), 'utf8')
    },

    ifNth: {
      data: require('./comparison/ifNth/data.json'),
      config: require('./comparison/ifNth/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './comparison/ifNth/template.hbs'), 'utf8')
    },

    ifOdd: {
      data: require('./comparison/ifOdd/data.json'),
      config: require('./comparison/ifOdd/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './comparison/ifOdd/template.hbs'), 'utf8')
    },

    is: {
      data: require('./comparison/is/data.json'),
      config: require('./comparison/is/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './comparison/is/template.hbs'), 'utf8')
    },

    isnt: {
      data: require('./comparison/isnt/data.json'),
      config: require('./comparison/isnt/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './comparison/isnt/template.hbs'), 'utf8')
    },

    lt: {
      data: require('./comparison/lt/data.json'),
      config: require('./comparison/lt/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './comparison/lt/template.hbs'), 'utf8')
    },

    lte: {
      data: require('./comparison/lte/data.json'),
      config: require('./comparison/lte/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './comparison/lte/template.hbs'), 'utf8')
    },

    neither: {
      data: require('./comparison/neither/data.json'),
      config: require('./comparison/neither/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './comparison/neither/template.hbs'), 'utf8')
    },

    not: {
      data: require('./comparison/not/data.json'),
      config: require('./comparison/not/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './comparison/not/template.hbs'), 'utf8')
    },

    or: {
      data: require('./comparison/or/data.json'),
      config: require('./comparison/or/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './comparison/or/template.hbs'), 'utf8')
    },

    unlessEq: {
      data: require('./comparison/unlessEq/data.json'),
      config: require('./comparison/unlessEq/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './comparison/unlessEq/template.hbs'), 'utf8')
    },

    unlessGt: {
      data: require('./comparison/unlessGt/data.json'),
      config: require('./comparison/unlessGt/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './comparison/unlessGt/template.hbs'), 'utf8')
    },

    unlessLt: {
      data: require('./comparison/unlessLt/data.json'),
      config: require('./comparison/unlessLt/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './comparison/unlessLt/template.hbs'), 'utf8')
    },

    unlessGteq: {
      data: require('./comparison/unlessGteq/data.json'),
      config: require('./comparison/unlessGteq/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './comparison/unlessGteq/template.hbs'), 'utf8')
    },

    unlessLteq: {
      data: require('./comparison/unlessLteq/data.json'),
      config: require('./comparison/unlessLteq/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './comparison/unlessLteq/template.hbs'), 'utf8')
    }
  },

  date: {
    year: {
      data: require('./date/year/data.json'),
      config: require('./date/year/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './date/year/template.hbs'), 'utf8')
    },

    moment: {
      data: require('./date/moment/data.json'),
      config: require('./date/moment/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './date/moment/template.hbs'), 'utf8')
    }
  },

  // fs: {
  //   fileSize: {
  //     data: require('./fs/fileSize/data.json'),
  //     config: require('./fs/fileSize/config.json'),
  //     template: fs.readFileSync(path.resolve(__dirname, './fs/fileSize/template.hbs'), 'utf8')
  //   },

  //   read: {
  //     data: require('./fs/read/data.json'),
  //     config: require('./fs/read/config.json'),
  //     template: fs.readFileSync(path.resolve(__dirname, './fs/read/template.hbs'), 'utf8')
  //   },

  //   readdir: {
  //     data: require('./fs/readdir/data.json'),
  //     config: require('./fs/readdir/config.json'),
  //     template: fs.readFileSync(path.resolve(__dirname, './fs/readdir/template.hbs'), 'utf8')
  //   }
  // },

  html: {
    attr: {
      data: require('./html/attr/data.json'),
      config: require('./html/attr/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './html/attr/template.hbs'), 'utf8')
    },

    css: {
      data: require('./html/css/data.json'),
      config: require('./html/css/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './html/css/template.hbs'), 'utf8')
    },

    js: {
      data: require('./html/js/data.json'),
      config: require('./html/js/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './html/js/template.hbs'), 'utf8')
    },

    sanitize: {
      data: require('./html/sanitize/data.json'),
      config: require('./html/sanitize/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './html/sanitize/template.hbs'), 'utf8')
    },

    ul: {
      data: require('./html/ul/data.json'),
      config: require('./html/ul/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './html/ul/template.hbs'), 'utf8')
    },

    ol: {
      data: require('./html/ol/data.json'),
      config: require('./html/ol/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './html/ol/template.hbs'), 'utf8')
    },

    thumbnailImage: {
      data: require('./html/thumbnailImage/data.json'),
      config: require('./html/thumbnailImage/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './html/thumbnailImage/template.hbs'), 'utf8')
    }
  },

  i18n: {
    i18n: {
      data: require('./i18n/i18n/data.json'),
      config: require('./i18n/i18n/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './i18n/i18n/template.hbs'), 'utf8')
    }
  },

  inflection: {
    inflect: {
      data: require('./inflection/inflect/data.json'),
      config: require('./inflection/inflect/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './inflection/inflect/template.hbs'), 'utf8')
    },

    ordinalize: {
      data: require('./inflection/ordinalize/data.json'),
      config: require('./inflection/ordinalize/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './inflection/ordinalize/template.hbs'), 'utf8')
    }
  },

  logging: {
    exports: {
      data: require('./logging/exports/data.json'),
      config: require('./logging/exports/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './logging/exports/template.hbs'), 'utf8')
    }
  },

  markdown: {
    helpers: {
      data: require('./markdown/helpers/data.json'),
      config: require('./markdown/helpers/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './markdown/helpers/template.hbs'), 'utf8')
    },

    undefined: {
      data: require('./markdown/undefined/data.json'),
      config: require('./markdown/undefined/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './markdown/undefined/template.hbs'), 'utf8')
    },

    md: {
      data: require('./markdown/md/data.json'),
      config: require('./markdown/md/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './markdown/md/template.hbs'), 'utf8')
    }
  },

  match: {
    match: {
      data: require('./match/match/data.json'),
      config: require('./match/match/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './match/match/template.hbs'), 'utf8')
    },

    isMatch: {
      data: require('./match/isMatch/data.json'),
      config: require('./match/isMatch/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './match/isMatch/template.hbs'), 'utf8')
    },

    mm: {
      data: require('./match/mm/data.json'),
      config: require('./match/mm/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './match/mm/template.hbs'), 'utf8')
    }
  },

  math: {
    abs: {
      data: require('./math/abs/data.json'),
      config: require('./math/abs/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './math/abs/template.hbs'), 'utf8')
    },

    add: {
      data: require('./math/add/data.json'),
      config: require('./math/add/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './math/add/template.hbs'), 'utf8')
    },

    avg: {
      data: require('./math/avg/data.json'),
      config: require('./math/avg/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './math/avg/template.hbs'), 'utf8')
    },

    ceil: {
      data: require('./math/ceil/data.json'),
      config: require('./math/ceil/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './math/ceil/template.hbs'), 'utf8')
    },

    divide: {
      data: require('./math/divide/data.json'),
      config: require('./math/divide/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './math/divide/template.hbs'), 'utf8')
    },

    floor: {
      data: require('./math/floor/data.json'),
      config: require('./math/floor/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './math/floor/template.hbs'), 'utf8')
    },

    minus: {
      data: require('./math/minus/data.json'),
      config: require('./math/minus/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './math/minus/template.hbs'), 'utf8')
    },

    modulo: {
      data: require('./math/modulo/data.json'),
      config: require('./math/modulo/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './math/modulo/template.hbs'), 'utf8')
    },

    multiply: {
      data: require('./math/multiply/data.json'),
      config: require('./math/multiply/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './math/multiply/template.hbs'), 'utf8')
    },

    plus: {
      data: require('./math/plus/data.json'),
      config: require('./math/plus/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './math/plus/template.hbs'), 'utf8')
    },

    random: {
      data: require('./math/random/data.json'),
      config: require('./math/random/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './math/random/template.hbs'), 'utf8')
    },

    remainder: {
      data: require('./math/remainder/data.json'),
      config: require('./math/remainder/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './math/remainder/template.hbs'), 'utf8')
    },

    round: {
      data: require('./math/round/data.json'),
      config: require('./math/round/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './math/round/template.hbs'), 'utf8')
    },

    subtract: {
      data: require('./math/subtract/data.json'),
      config: require('./math/subtract/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './math/subtract/template.hbs'), 'utf8')
    },

    sum: {
      data: require('./math/sum/data.json'),
      config: require('./math/sum/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './math/sum/template.hbs'), 'utf8')
    },

    times: {
      data: require('./math/times/data.json'),
      config: require('./math/times/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './math/times/template.hbs'), 'utf8')
    }
  },

  misc: {
    frame: {
      data: require('./misc/frame/data.json'),
      config: require('./misc/frame/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './misc/frame/template.hbs'), 'utf8')
    },

    option: {
      data: require('./misc/option/data.json'),
      config: require('./misc/option/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './misc/option/template.hbs'), 'utf8')
    },

    noop: {
      data: require('./misc/noop/data.json'),
      config: require('./misc/noop/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './misc/noop/template.hbs'), 'utf8')
    },

    typeOf: {
      data: require('./misc/typeOf/data.json'),
      config: require('./misc/typeOf/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './misc/typeOf/template.hbs'), 'utf8')
    },

    withHash: {
      data: require('./misc/withHash/data.json'),
      config: require('./misc/withHash/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './misc/withHash/template.hbs'), 'utf8')
    }
  },

  number: {
    bytes: {
      data: require('./number/bytes/data.json'),
      config: require('./number/bytes/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './number/bytes/template.hbs'), 'utf8')
    },

    addCommas: {
      data: require('./number/addCommas/data.json'),
      config: require('./number/addCommas/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './number/addCommas/template.hbs'), 'utf8')
    },

    phoneNumber: {
      data: require('./number/phoneNumber/data.json'),
      config: require('./number/phoneNumber/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './number/phoneNumber/template.hbs'), 'utf8')
    },

    toAbbr: {
      data: require('./number/toAbbr/data.json'),
      config: require('./number/toAbbr/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './number/toAbbr/template.hbs'), 'utf8')
    },

    toExponential: {
      data: require('./number/toExponential/data.json'),
      config: require('./number/toExponential/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './number/toExponential/template.hbs'), 'utf8')
    },

    toFixed: {
      data: require('./number/toFixed/data.json'),
      config: require('./number/toFixed/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './number/toFixed/template.hbs'), 'utf8')
    },

    toFloat: {
      data: require('./number/toFloat/data.json'),
      config: require('./number/toFloat/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './number/toFloat/template.hbs'), 'utf8')
    },

    toInt: {
      data: require('./number/toInt/data.json'),
      config: require('./number/toInt/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './number/toInt/template.hbs'), 'utf8')
    },

    toPrecision: {
      data: require('./number/toPrecision/data.json'),
      config: require('./number/toPrecision/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './number/toPrecision/template.hbs'), 'utf8')
    }
  },

  object: {
    extend: {
      data: require('./object/extend/data.json'),
      config: require('./object/extend/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './object/extend/template.hbs'), 'utf8')
    },

    forIn: {
      data: require('./object/forIn/data.json'),
      config: require('./object/forIn/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './object/forIn/template.hbs'), 'utf8')
    },

    forOwn: {
      data: require('./object/forOwn/data.json'),
      config: require('./object/forOwn/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './object/forOwn/template.hbs'), 'utf8')
    },

    toPath: {
      data: require('./object/toPath/data.json'),
      config: require('./object/toPath/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './object/toPath/template.hbs'), 'utf8')
    },

    get: {
      data: require('./object/get/data.json'),
      config: require('./object/get/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './object/get/template.hbs'), 'utf8')
    },

    getObject: {
      data: require('./object/getObject/data.json'),
      config: require('./object/getObject/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './object/getObject/template.hbs'), 'utf8')
    },

    hasOwn: {
      data: require('./object/hasOwn/data.json'),
      config: require('./object/hasOwn/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './object/hasOwn/template.hbs'), 'utf8')
    },

    isObject: {
      data: require('./object/isObject/data.json'),
      config: require('./object/isObject/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './object/isObject/template.hbs'), 'utf8')
    },

    JSONparse: {
      data: require('./object/JSONparse/data.json'),
      config: require('./object/JSONparse/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './object/JSONparse/template.hbs'), 'utf8')
    },

    JSONstringify: {
      data: require('./object/JSONstringify/data.json'),
      config: require('./object/JSONstringify/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './object/JSONstringify/template.hbs'), 'utf8')
    },

    merge: {
      data: require('./object/merge/data.json'),
      config: require('./object/merge/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './object/merge/template.hbs'), 'utf8')
    },

    parseJSON: {
      data: require('./object/parseJSON/data.json'),
      config: require('./object/parseJSON/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './object/parseJSON/template.hbs'), 'utf8')
    },

    pick: {
      data: require('./object/pick/data.json'),
      config: require('./object/pick/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './object/pick/template.hbs'), 'utf8')
    },

    stringify: {
      data: require('./object/stringify/data.json'),
      config: require('./object/stringify/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './object/stringify/template.hbs'), 'utf8')
    }
  },

  path: {
    absolute: {
      data: require('./path/absolute/data.json'),
      config: require('./path/absolute/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './path/absolute/template.hbs'), 'utf8')
    },

    dirname: {
      data: require('./path/dirname/data.json'),
      config: require('./path/dirname/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './path/dirname/template.hbs'), 'utf8')
    },

    relative: {
      data: require('./path/relative/data.json'),
      config: require('./path/relative/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './path/relative/template.hbs'), 'utf8')
    },

    basename: {
      data: require('./path/basename/data.json'),
      config: require('./path/basename/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './path/basename/template.hbs'), 'utf8')
    },

    stem: {
      data: require('./path/stem/data.json'),
      config: require('./path/stem/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './path/stem/template.hbs'), 'utf8')
    },

    extname: {
      data: require('./path/extname/data.json'),
      config: require('./path/extname/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './path/extname/template.hbs'), 'utf8')
    },

    resolve: {
      data: require('./path/resolve/data.json'),
      config: require('./path/resolve/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './path/resolve/template.hbs'), 'utf8')
    },

    segments: {
      data: require('./path/segments/data.json'),
      config: require('./path/segments/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './path/segments/template.hbs'), 'utf8')
    }
  },

  regex: {
    toRegex: {
      data: require('./regex/toRegex/data.json'),
      config: require('./regex/toRegex/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './regex/toRegex/template.hbs'), 'utf8')
    },

    test: {
      data: require('./regex/test/data.json'),
      config: require('./regex/test/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './regex/test/template.hbs'), 'utf8')
    }
  },

  string: {
    append: {
      data: require('./string/append/data.json'),
      config: require('./string/append/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './string/append/template.hbs'), 'utf8')
    },

    camelcase: {
      data: require('./string/camelcase/data.json'),
      config: require('./string/camelcase/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './string/camelcase/template.hbs'), 'utf8')
    },

    capitalize: {
      data: require('./string/capitalize/data.json'),
      config: require('./string/capitalize/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './string/capitalize/template.hbs'), 'utf8')
    },

    capitalizeAll: {
      data: require('./string/capitalizeAll/data.json'),
      config: require('./string/capitalizeAll/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './string/capitalizeAll/template.hbs'), 'utf8')
    },

    center: {
      data: require('./string/center/data.json'),
      config: require('./string/center/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './string/center/template.hbs'), 'utf8')
    },

    chop: {
      data: require('./string/chop/data.json'),
      config: require('./string/chop/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './string/chop/template.hbs'), 'utf8')
    },

    dashcase: {
      data: require('./string/dashcase/data.json'),
      config: require('./string/dashcase/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './string/dashcase/template.hbs'), 'utf8')
    },

    dotcase: {
      data: require('./string/dotcase/data.json'),
      config: require('./string/dotcase/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './string/dotcase/template.hbs'), 'utf8')
    },

    downcase: {
      data: require('./string/downcase/data.json'),
      config: require('./string/downcase/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './string/downcase/template.hbs'), 'utf8')
    },

    ellipsis: {
      data: require('./string/ellipsis/data.json'),
      config: require('./string/ellipsis/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './string/ellipsis/template.hbs'), 'utf8')
    },

    hyphenate: {
      data: require('./string/hyphenate/data.json'),
      config: require('./string/hyphenate/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './string/hyphenate/template.hbs'), 'utf8')
    },

    isString: {
      data: require('./string/isString/data.json'),
      config: require('./string/isString/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './string/isString/template.hbs'), 'utf8')
    },

    lowercase: {
      data: require('./string/lowercase/data.json'),
      config: require('./string/lowercase/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './string/lowercase/template.hbs'), 'utf8')
    },

    occurrences: {
      data: require('./string/occurrences/data.json'),
      config: require('./string/occurrences/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './string/occurrences/template.hbs'), 'utf8')
    },

    pascalcase: {
      data: require('./string/pascalcase/data.json'),
      config: require('./string/pascalcase/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './string/pascalcase/template.hbs'), 'utf8')
    },

    pathcase: {
      data: require('./string/pathcase/data.json'),
      config: require('./string/pathcase/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './string/pathcase/template.hbs'), 'utf8')
    },

    plusify: {
      data: require('./string/plusify/data.json'),
      config: require('./string/plusify/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './string/plusify/template.hbs'), 'utf8')
    },

    prepend: {
      data: require('./string/prepend/data.json'),
      config: require('./string/prepend/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './string/prepend/template.hbs'), 'utf8')
    },

    raw: {
      data: require('./string/raw/data.json'),
      config: require('./string/raw/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './string/raw/template.hbs'), 'utf8')
    },

    remove: {
      data: require('./string/remove/data.json'),
      config: require('./string/remove/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './string/remove/template.hbs'), 'utf8')
    },

    removeFirst: {
      data: require('./string/removeFirst/data.json'),
      config: require('./string/removeFirst/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './string/removeFirst/template.hbs'), 'utf8')
    },

    replace: {
      data: require('./string/replace/data.json'),
      config: require('./string/replace/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './string/replace/template.hbs'), 'utf8')
    },

    replaceFirst: {
      data: require('./string/replaceFirst/data.json'),
      config: require('./string/replaceFirst/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './string/replaceFirst/template.hbs'), 'utf8')
    },

    reverse: {
      data: require('./string/reverse/data.json'),
      config: require('./string/reverse/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './string/reverse/template.hbs'), 'utf8')
    },

    sentence: {
      data: require('./string/sentence/data.json'),
      config: require('./string/sentence/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './string/sentence/template.hbs'), 'utf8')
    },

    snakecase: {
      data: require('./string/snakecase/data.json'),
      config: require('./string/snakecase/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './string/snakecase/template.hbs'), 'utf8')
    },

    split: {
      data: require('./string/split/data.json'),
      config: require('./string/split/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './string/split/template.hbs'), 'utf8')
    },

    startsWith: {
      data: require('./string/startsWith/data.json'),
      config: require('./string/startsWith/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './string/startsWith/template.hbs'), 'utf8')
    },

    titleize: {
      data: require('./string/titleize/data.json'),
      config: require('./string/titleize/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './string/titleize/template.hbs'), 'utf8')
    },

    trim: {
      data: require('./string/trim/data.json'),
      config: require('./string/trim/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './string/trim/template.hbs'), 'utf8')
    },

    trimLeft: {
      data: require('./string/trimLeft/data.json'),
      config: require('./string/trimLeft/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './string/trimLeft/template.hbs'), 'utf8')
    },

    trimRight: {
      data: require('./string/trimRight/data.json'),
      config: require('./string/trimRight/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './string/trimRight/template.hbs'), 'utf8')
    },

    truncate: {
      data: require('./string/truncate/data.json'),
      config: require('./string/truncate/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './string/truncate/template.hbs'), 'utf8')
    },

    truncateWords: {
      data: require('./string/truncateWords/data.json'),
      config: require('./string/truncateWords/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './string/truncateWords/template.hbs'), 'utf8')
    },

    upcase: {
      data: require('./string/upcase/data.json'),
      config: require('./string/upcase/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './string/upcase/template.hbs'), 'utf8')
    },

    uppercase: {
      data: require('./string/uppercase/data.json'),
      config: require('./string/uppercase/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './string/uppercase/template.hbs'), 'utf8')
    }
  },

  url: {
    encodeURI: {
      data: require('./url/encodeURI/data.json'),
      config: require('./url/encodeURI/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './url/encodeURI/template.hbs'), 'utf8')
    },

    escape: {
      data: require('./url/escape/data.json'),
      config: require('./url/escape/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './url/escape/template.hbs'), 'utf8')
    },

    decodeURI: {
      data: require('./url/decodeURI/data.json'),
      config: require('./url/decodeURI/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './url/decodeURI/template.hbs'), 'utf8')
    },

    url_encode: {
      data: require('./url/url_encode/data.json'),
      config: require('./url/url_encode/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './url/url_encode/template.hbs'), 'utf8')
    },

    url_decode: {
      data: require('./url/url_decode/data.json'),
      config: require('./url/url_decode/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './url/url_decode/template.hbs'), 'utf8')
    },

    urlResolve: {
      data: require('./url/urlResolve/data.json'),
      config: require('./url/urlResolve/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './url/urlResolve/template.hbs'), 'utf8')
    },

    urlParse: {
      data: require('./url/urlParse/data.json'),
      config: require('./url/urlParse/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './url/urlParse/template.hbs'), 'utf8')
    },

    stripQuerystring: {
      data: require('./url/stripQuerystring/data.json'),
      config: require('./url/stripQuerystring/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './url/stripQuerystring/template.hbs'), 'utf8')
    },

    stripProtocol: {
      data: require('./url/stripProtocol/data.json'),
      config: require('./url/stripProtocol/config.json'),
      template: fs.readFileSync(path.resolve(__dirname, './url/stripProtocol/template.hbs'), 'utf8')
    }
  }
};
