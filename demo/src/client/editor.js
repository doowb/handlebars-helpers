'use strict';

// I'm not sure if there's a different way to do this
const CodeMirror = require('codemirror');
require('codemirror/mode/handlebars/handlebars');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/htmlembedded/htmlembedded');

class Editor {
  constructor(id, {handlebars, helpers}) {
    this.id = id;
    this.handlebars = handlebars;
    this.helpers = helpers;
    this.template = CodeMirror.fromTextArea(document.getElementById(`template-${id}`), {mode: 'handlebars'});
    this.data = CodeMirror.fromTextArea(document.getElementById(`data-${id}`), {mode: 'javascript'});
    this.html = CodeMirror.fromTextArea(document.getElementById(`html-${id}`), {mode: 'htmlembedded'});
    this.output = $(`#output-${id}`);
    this.init();
  }

  init() {
    $(`#run-${this.id}`).click((e) => {
      e.preventDefault();
      this.run();
    });
  }

  run() {
    const handlebars = this.handlebars.create();
    handlebars.registerHelper(this.helpers());

    let data = JSON.parse(this.data.getValue());
    let template = this.template.getValue();
    let fn = handlebars.compile(template);
    let html = fn(data);

    this.output.html(html);
    this.html.setValue(html);
  }
}

module.exports = Editor;
