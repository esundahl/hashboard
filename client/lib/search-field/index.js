

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
  return this;
}


/**
 * Sets fields content
 *
 * @param {Type} value
 * @return {Type}
 * @api public
 */

SearchField.prototype.set = function(value) {
  this.el.querySelector('input').value = value;
}



/**
 * Exports
 */

module.exports = SearchField;

