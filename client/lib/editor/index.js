

/**
 * Dependencies
 */

var grow = require('grow');
var Emitter = require('emitter');


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

function Editor (id) {
  Emitter(this);
  this.el = document.getElementById(id);
  grow(this.el);
  return this;
}


/**
 * Loads data
 *
 * @param {String} content
 * @return {Type}
 * @api public
 */

Editor.prototype.load = function (content) {
  this.el.value = content;
  this.emit('load', this.el.value);
}


/**
 * Exports
 */

module.exports = Editor;
