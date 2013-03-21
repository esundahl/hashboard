

/**
 * Dependencies
 */

var reactive = require('reactive');
var type = require('type');
var domify = require('domify');
var tmpl = require('./template.js');


/**
 * Class Variables
 */

var el = domify(tmpl)[0];
var hashListItem = el.removeChild(el.querySelector('.hash-list-item'));


/**
 * Constructor Function
 *
 * @param {Collection} collection
 * @return {Object}
 * @api public
 */

function HashList(collection) {
  this.el = el;
  collection.forEach(add);
  collection.on('remove', remove);
  collection.on('add', add);
  this.collection = collection;
  return this;
}


/**
 * Add Item
 * TODO Test add method
 *
 * @param {Hash.Model} item
 * @return {Type}
 * @api public
 */

function add(model) {
  var itemView = hashListItem.cloneNode(true);
  reactive(itemView, model);
  model.listItemView = itemView;
  el.appendChild(itemView);
}


/**
 * Remove Item
 * TODO Test remove method
 *
 * @param {Type} name
 * @return {Type}
 * @api public
 */

function remove(model) {

  if (type(model) === 'array') {
    model.forEach(remove);
  }

  else {
    var itemView = model.listItemView;
    itemView.parentNode.removeChild(itemView);
  }

}


/**
 * Exports
 */

module.exports = HashList;
