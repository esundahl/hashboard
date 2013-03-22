

/**
 * Dependencies
 */

var Hash = require('./model.js');
var Emitter = require('emitter');
var Collection = require('collection');


/**
 * Constructor
 *
 * @param {Array} data
 * @return {Object}
 * @api public
 */

function Hashes (data) {
  var hashes = new Collection();
  data.forEach(hashes.add, hashes);
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
  var hash = new Hash(data);
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
 * Set Active Model
 *
 * @param {Sting|Hash.Model} model
 * @return {Type}
 * @api public
 */

Collection.prototype.active = function (model) {
  console.log(model);

  //if (typeof model === 'string') {
    //active = this.find(function(hash) {
      //return model === hash.tag();
    //});
  //}
  //else active = model;
  //this.emit('active', model);
}


/**
 * Exports
 */

module.exports = Hashes;
