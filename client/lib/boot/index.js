

/**
 * Dependencies
 */

var page = require('page');
var Editor = require('editor');
var hashes = require('hashes');
var data = hashes.fakeApi;
var Collection = hashes.Collection;
var SearchList = require('search-list');


/**
 * Routes
 */

page('/', index);
page('/hash/:hash', index);
page();


/**
 * Index
 *
 * @param {Object} ctx
 * @api public
 */

function index(ctx) {
  var editor = new Editor('editor');
  var collection = new Collection(data);
  var model = collection.models.find(function(model) {
    return model.hash() === ctx.params.hash;
  });
  var content = '# ' + model.titlelized() + '\n\n' + model.content()
  var searchList = new SearchList(collection);
  console.log(searchList);
  editor.load(content);
}

