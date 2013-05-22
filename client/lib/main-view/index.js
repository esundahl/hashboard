

/**
 * Dependencies
 */

var HashList = require('hash-list');
var SearchField = require('search-field');
var Editor = require('editor');
var template = require('./template.js');
var domify = require('domify');




/**
 * Private Variables
 */

var el = domify(template)[0];
var searchField;
var hashList;
var editor;




/**
 * Constructor
 *
 * @param {Type} name
 * @return {Type}
 * @api public
 */

function MainView(page, collection) {

  var self = this;

  // Initialize SubViews
  hashList = new HashList(collection);
  searchField = new SearchField(collection);
  editor = new Editor();

  // Bind Events
  searchField.on('submit', function(e) {
    page('/hash/' + e);
  });

  // Append SubViews
  el.querySelector('.hash-list').parentNode.replaceChild(hashList.el, el.querySelector('.hash-list'));
  el.querySelector('.search-field').parentNode.replaceChild(searchField.el, el.querySelector('.search-field'));
  el.querySelector('.editor').parentNode.replaceChild(editor.el, el.querySelector('.editor'));

  // Assign Properties
  this.collection = collection;
  this.el = el;

  return this;
}




/**
 * Load a hash
 *
 * @param {Hash.model} model
 * @return {Type}
 * @api public
 */

MainView.prototype.load = function(model) {
  searchField.set(model.tag(), true);
  editor.focus();
  editor.load(model);
}




/**
 * Exports
 */

module.exports = MainView;
