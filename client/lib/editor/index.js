

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
  Emitter(this);
  this.el = domify(template)[0];
  this.textarea = this.el.querySelector('textarea');

  this.events = delegates(this.el, this);
  this.events.bind('keyup textarea', 'keypress');
  
  if (model) {
    this.model = model
    this.load(model);
  }

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
  this.model = model;
  this.textarea.value = '# ' + model.titleize() + '\n\n' + model.content();
  this.emit('load', this.el.value);
};


/**
 * Saves the parsed content
 *
 * @param {Type} name
 * @return {Type}
 * @api public
 */

Editor.prototype.save = function () {
  console.log('Saved!');
};


/**
 * Handles editor keypress events
 *
 * @param {event} e
 * @return {Type}
 * @api public
 */

Editor.prototype.keypress = function(e) {
  var parsed = this.parse();
  if (parsed.hash !== this.model.tag()) {
    this.model.tag(parsed.hash);
  }
  this.model.content(parsed.lines.join('\n'));
  this.model.save();
};


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
    lines: lines,
    hash: hash
  };
};


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
