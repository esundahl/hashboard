

/**
 * Dependencies
 */

var Hash = require('./model.js');
var Emitter = require('emitter');
var Collection = require('collection');
var remove = require('remove');


/**
 * Constructor
 *
 * @param {Array} data
 * @return {Object}
 * @api public
 */

function Hashes (data) {
  var models = [];
  var hashes;

  data.forEach(function (item) {
    var hash = new Hash(item);
    models.push(hash);
  });

  hashes = new Collection(models);
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

Collection.prototype.add = function (model) {
  this.push(model);
  this.emit('add', model);
}


/**
 * Removes a model from the collection
 *
 * @param {String|Number|Hash.Model} model
 * @return {Type}
 * @api public
 */

Collection.prototype.remove = function (args) {
  remove(this.models, arguments[0], arguments[1]);
  this.emit('remove');
}


/**
 * Exports
 */

module.exports = Hashes;
