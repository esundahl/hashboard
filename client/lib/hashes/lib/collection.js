

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
  var models = [];

  data.forEach(function (item) {
    var hash = new Hash(item);
    models.push(hash);
  });

  this.models = new Collection(models);
  return this;
}


/**
 * Mixins
 */

Emitter(Hashes.prototype);


/**
 * Exports
 */

module.exports = Hashes;
