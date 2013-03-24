

/**
 * Dependencies
 */

var namize = require('namize');
var model = require('model');


/**
 * Constructor Function
 *
 * @param {Type} name
 * @return {Type}
 * @api public
 */

var Hash = model('Hash')
  .attr('id')
  .attr('active')
  .attr('tag')
  .attr('content');


/**
 * Returns a slug based on the hashes title
 *
 * @return {String}
 * @api public
 */

Hash.prototype.slug = function () {
  return this.tag();
}


/**
 * Returns a titleized version of the hash tag
 *
 * @return {String}
 * @api public
 */

Hash.prototype.titleize = function () {
  var formatted = this.tag();
  formatted = formatted.replace(/-/g, ' ');
  formatted = namize(formatted);
  return formatted;
}

/**
 * Exports
 */

module.exports = Hash;
