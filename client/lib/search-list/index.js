

/**
 * Dependencies
 */

var Search = require('search');


/**
 * Constructor Function
 *
 * @param {Type} collection
 * @return {Object}
 * @api public
 */

function FilterList(collection) {
  var el = this.el = document.getElementById('search-list');
  console.log(collection);
  collection.models.forEach(function(model) {
    var li = document.createElement('li');
    li.innerHTML = model.titlelized();
    el.appendChild(li);
  });  return this;
}


/**
 * Exports
 */

module.exports = FilterList;
