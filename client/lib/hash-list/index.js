

/**
 * Dependencies
 */

var reactive = require('reactive');
var type = require('type');
var domify = require('domify');
var template = require('./template.js');
var tmpl = domify(template)[0];


/**
 * Class Variables
 */

var view = domify("<ul class='hash-list'></ul>")[0];


/**
 * Constructor Function
 *
 * @param {Collection} collection
 * @return {Object}
 * @api public
 */

function HashList(collection) {
  collection.forEach(add);
  collection.on('remove', remove);
  collection.on('add', add);
  this.collection = collection;
  this.view = view;
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
  var itemView = tmpl.cloneNode(true);
  reactive(itemView, model);
  model.listItemView = itemView;
  view.appendChild(itemView);
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
