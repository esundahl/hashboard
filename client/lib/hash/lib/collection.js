

/**
 * Dependencies
 */

var Hash = require('./model.js');
var Emitter = require('emitter');
var Collection = require('collection');
var store = require('store');


/**
 * Constructor
 *
 * @param {Array} data
 * @return {Object}
 * @api public
 */

function Hashes (models) {
  var hashes = new Collection(models);
  return hashes;
}


/**
 * Mixins
 */

Emitter(Collection.prototype);


/**
 * Adds a model to the collection
 *
 * @param {Hash.Model} model
 * @return {Type}
 * @api public
 */


Collection.prototype.add = function (data) {
  var self = this;
  var hash = new Hash({
    tag: data.tag,
    content: data.content
  });
  this.push(hash);
  this.emit('add', hash);
}


/**
 * Removes a model from the collection
 *
 * @param {String|Number|Hash.Model} model
 * @return {Type}
 * @api public
 */


Collection.prototype.remove = function (index) {
  var items = this.models.splice(index, arguments[1] || 1);
  this.emit('remove', items);
}


/**
 * Fetches hash data
 *
 * @param {Type} name
 * @return {Type}
 * @api public
 */

Collection.prototype.fetch = function() {
  var data = store.getAll();
  delete data['debug'];
  for (hash in data) {
    this.add(data[hash]);
  }
  this.emit('fetch', this);
  return this;
}


/**
 * Find a Model by tag
 *
 * @param {String} tag
 * @return {Type}
 * @api public
 */

Collection.prototype.findByTag = function (tag) {
  var result;
  if (typeof tag === 'string') {
    result = this.find(function(model) {
      return model.tag() === tag;
    });
  }
  return result;
}


/**
 * Set active hash
 *
 * @param {Type} name
 * @return {Type}
 * @api public
 */

Collection.prototype.setActiveHash = function (model) {
  if (this.activeHash) this.activeHash.active(false);
  this.activeHash = model;
  this.activeHash.active(true);
}



/**
 * Exports
 */

module.exports = Hashes;
