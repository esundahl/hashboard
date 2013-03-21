

/**
 * Dependencies
 */

var domify = require('domify');
var tmpl = require('./template.js');


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
  return this;
}


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
    this.input.placeholder = value;
    this.input.value = '';
  }

  else {
    this.input.value = value;
    this.input.placeholder = '';
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
 * Exports
 */

module.exports = SearchField;

