

/**
 * Dependencies
 */

var reactive = require('reactive');
var type = require('type');
var domify = require('domify');
var template = require('./template.js');
var events = require('events');


/**
 * Private Variables
 */

var tmpl = domify(template)[0];
var el = tmpl.cloneNode(true);
var active;


/**
 * Constructor Function
 *
 * @param {Collection} collection
 * @return {Object}
 * @api public
 */

function HashList(collection) {
  el.removeChild(el.querySelector('.hash-list-item'));

  collection.forEach(add);
  collection.on('remove', remove);
  collection.on('add', add);
  collection.on('active', active);

  events = events(el, this);
  //events.bind('click');

  this.el = el;
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
  var itemView = tmpl.cloneNode(true);
  reactive(itemView, model);
  model.listItemView = itemView.removeChild(itemView.querySelector('.hash-list-item'));
  el.appendChild(model.listItemView);
}


/**
 * Remove Item

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
