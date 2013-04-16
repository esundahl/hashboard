

/**
 * Dependencies
 */

var namize = require('namize');
var model = require('model');
var store = require('store');


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
 * Saves the hash
 *
 * @return {Hash.Model}
 * @api public
 */

Hash.prototype.save = function () {
	store.set(this.tag(), {
    tag: this.tag(),
    content: this.content()
  });
  this.emit('save');
  return this;
}


/**
 * Renames the hash
 *
 * @param {String} hash
 * @return {Hash.Model}
 * @api public
 */

Hash.prototype.rename = function (hash) {
  store.remove(this.tag());
  this.tag(hash);
  this.save();
  return this;
}


/**
 * Exports
 */

module.exports = Hash;
