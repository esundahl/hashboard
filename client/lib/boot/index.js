

/**
 * Dependencies
 */

var page = require('page');
var Editor = require('editor');
var hashes = require('hashes');
var data = hashes.fakeApi;
var Collection = hashes.Collection;


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
  var model = collection.models[ctx.params.hash];
  var content = '# ' + model.titlelized() + '\n\n' + model.content()
  editor.load(content);
}

