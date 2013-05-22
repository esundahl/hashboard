

/**
 * Dependencies
 */

var grow = require('grow');
var Emitter = require('emitter');
var delegates = require('delegates');
var domify = require('domify');
var namize = require('namize');
var template = require('./template');




/**
 * Constructor Function
 *
 * @param {String} id
 * @param {Object} options
 * @return {Object}
 * @api public
 */

function Editor (model) {
  this.el = domify(template)[0];
  this.textarea = this.el.querySelector('textarea');

  this.events = delegates(this.el, this);
  this.events.bind('keyup textarea', 'keypress');

  grow(this.textarea);

  if (model) {
    this.model = model
    this.load(model);
  }

  return this;
}
Emitter(Editor.prototype);




/**
 * Loads data
 *
 * @param {String} content
 * @return {Type}
 * @api public
 */

Editor.prototype.load = function (model) {
  this.model = model;
  this.textarea.value = '# ' + model.titleize() + '\n\n' + model.content();
  this.emit('load', this.el.value);
}




/**
 * Handles editor keypress events
 *
 * @param {event} e
 * @return {Type}
 * @api public
 */

Editor.prototype.keypress = function(e) {
  var parsed = this.parse();
  this.model.rename(parsed.hash);
  this.model.content(parsed.content);
  this.model.save();
}




/**
 * Parses the contents of the editor
 *
 * @param {Type} name
 * @return {Type}
 * @api public
 */

Editor.prototype.parse = function() {
  var lines = this.textarea.value.split('\n');
  var hash = this.parseHash(lines.shift());
  if (lines[0] === '') lines.shift();
  return {
    content: lines.join('\n'),
    hash: hash
  };
}




/**
 * Parses a hash entry
 *
 * @param {String} hash
 * @return {Strin}
 * @api public
 */

Editor.prototype.parseHash = function(hash) {
  var first = hash.charAt(0);
  var second = hash.charAt(1);
  var result;
  result = hash.replace('#', '');
  result = result.trim();
  result = result.toLowerCase();
  result = result.replace(/\ /g, '-');
  return result;
}


/**
 * focus on the the editor
 *
 * @api public
 */

Editor.prototype.focus = function() {
  this.el.querySelector('textarea').focus();
};




function titleize (string) {
  var formatted = string;
  formatted = formatted.replace(/-/g, ' ');
  formatted = namize(formatted);
  return formatted;
}


/**
 * Exports
 */

module.exports = Editor;
