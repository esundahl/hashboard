

/**
 * Dependencies
 */

var Search = require('search');
var reactive = require('reactive');
var domify = require('domify');
var tmpl = domify(require('./template.js'))[0];


/**
 * Add Each to reactive
 */

reactive.bind('each', function(el, val){
  console.log(el);
  console.log(val);
  var self = this;
  var val = val.split(/ +/);
  el.removeAttribute('each');

  if (val.length > 1) {
    var name = val[0];
    var prop = val[2];
  } else {
    var prop = val[0];
  }

  var arr = this.value(prop);

  arr.forEach(function(obj){
    var clone = el.cloneNode(true);
    var view = reactive(clone, obj, {
      parentView: self.view,
      viewName: name
    });
    el.parentNode.appendChild(clone);
  });

  el.parentNode.removeChild(el);
});


/**
 * Constructor Function
 *
 * @param {Collection} collection
 * @return {Object}
 * @api public
 */

function FilterList(collection) {
  this.collection = collection;
  reactive(tmpl, collection, this);
}


/**
 * Exports
 */

module.exports = FilterList;
