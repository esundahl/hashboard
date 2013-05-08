

/*!
 * Dependencies
 */

var reactive = require('reactive');
var type = require('type');
var domify = require('domify');
var template = require('./template.js');
var classes = require('classes');




/*!
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

  this.el = el;
  this.collection = collection;
  return this;
}




/**
 * Add Item
 *
 * @param {Hash.Model} item
 * @return {Type}
 * @api public
 */

function add(model) {
  var itemView = tmpl.cloneNode(true);
  reactive(itemView, model);
  itemView = itemView.removeChild(itemView.querySelector('.hash-list-item'));
  el.appendChild(itemView);
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
 * active binding.
 */

reactive.bind('data-active', function(el, name){
  this.change(function(){
    if (this.value(name)) {
      classes(el).add('active');
    } else {
      classes(el).remove('active');
    }
  });
});




/**
 * Exports
 */

module.exports = HashList;
