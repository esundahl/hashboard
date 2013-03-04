

/**
 * Dependencies
 */

var model = require('model');
var namize = require('namize');


/**
 * Hash
 *
 * @param {Type} name
 * @return {Type}
 * @api public
 */

var Hash = model('Hash')
  .attr('content')
  .attr('hash')


/**
 * Returns a titleized version of the hash
 *
 * @return {String}
 * @api public
 */

Hash.prototype.titlelized = function () {
  var formatted = this.hash();
  formatted = formatted.replace(/-/g, ' ');
  formatted = namize(formatted);
  return formatted;
}

/**
 * Exports
 */

module.exports = Hash;
