

/**
 * Dependencies
 */

var Hash = require('./model.js');
var Emitter = require('emitter');


/**
 * Constructor
 *
 * @param {Array} data
 * @return {Object}
 * @api public
 */

function Collection (data) {
  var models = this.models = {};

  data.forEach(function (item) {
    var hash = new Hash(item);
    models[hash.hash()] = hash;
  });

  return this;
}


/**
 * Mixins
 */

Emitter(Collection.prototype);


/**
 * Exports
 */

module.exports = Collection;
