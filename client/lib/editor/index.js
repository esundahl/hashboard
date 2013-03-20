

/**
 * Dependencies
 */

var grow = require('grow');
var Emitter = require('emitter');
var domify = require('domify');
var template = require('./template');


/**
 * Private Variables
 */

var editor;


/**
 * Constructor Function
 *
 * @param {String} id
 * @param {Object} options
 * @return {Object}
 * @api public
 */

function Editor (model) {
  Emitter(this);
  this.el = domify(template)[0];
  if (model) this.load(model);
  return this;
}


/**
 * Loads data
 *
 * @param {String} content
 * @return {Type}
 * @api public
 */

Editor.prototype.load = function (model) {
  this.el.querySelector('textarea').value = '# ' + model.titleize() + '\n\n' + model.content();
  this.emit('load', this.el.value);
}


/**
 * Parses the textarea content
 */

Editor.prototype.parse = function (string) {
  //Extract first line
  //Remove hash from extracted line

}


/**
 * Exports
 */

module.exports = Editor;
