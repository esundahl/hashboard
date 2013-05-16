

/**
 * Dependencies
 */

var domify = require('domify');
var tmpl = require('./template.js');
var Emitter = require('emitter');
var delegates = require('delegates');




/**
 * Constructor
 *
 * @param {Type} name
 * @return {Type}
 * @api public
 */

function SearchField(collection) {
  this.el = domify(tmpl)[0].cloneNode(true);
  this.input = this.el.querySelector('input');

  this.events = delegates(this.el, this);
  this.events.bind('keydown input', 'keydown');

  return this;
}
Emitter(SearchField.prototype);




/**
 * Sets fields content
 *
 * @param {String} value // Value used for input value
 * @param {Boolean} placeholder // Optional boolean value sets placeholder value instead, if true
 * @return {Type}
 * @api public
 */

SearchField.prototype.set = function(value, placeholder) {

  if (placeholder) {
    this.input.value = value;
  }

  else {
    this.input.value = value;
  }

}




/**
 * Placeholder
 *
 * @param {Type} 
 * @return {Type}
 * @api public
 */

SearchField.prototype.placeholder = function (value) {
  this.el.querySelector('input').placeholder = value;
}




/**
 * Submit event
 *
 * @param {Event} e
 * @return {Type}
 * @api public
 */

SearchField.prototype.keydown = function(e) {
  if (e.keyCode !== 13) return;
  this.emit('submit', this.input.value);
};




/**
 * Exports
 */

module.exports = SearchField;
