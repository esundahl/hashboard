

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
<<<<<<< HEAD
  var models = [];
  var hashes;

  data.forEach(function (item) {
    var hash = new Hash(item);
    models.push(hash);
  });

  hashes = new Collection(models);
=======
  var hashes = new Collection();
  data.forEach(hashes.add, hashes);
>>>>>>> feature/hash-list
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

<<<<<<< HEAD
Collection.prototype.add = function (model) {
  this.push(model);
  this.emit('add', model);
=======
Collection.prototype.add = function (data) {
  var hash = new Hash(data);
  this.push(hash);
  this.emit('add', hash);
>>>>>>> feature/hash-list
}


/**
 * Removes a model from the collection
 *
 * @param {String|Number|Hash.Model} model
 * @return {Type}
 * @api public
 */

<<<<<<< HEAD
Collection.prototype.remove = function (args) {
  remove(this.models, arguments[0], arguments[1]);
  this.emit('remove');
=======
Collection.prototype.remove = function (index) {
  // TODO: Write tests for the new remove refactor
  var items = this.models.splice(index, arguments[1] || 1);
  this.emit('remove', items);
>>>>>>> feature/hash-list
}


/**
 * Exports
 */

module.exports = Hashes;
