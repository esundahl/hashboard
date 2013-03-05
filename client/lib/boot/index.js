

/**
 * Dependencies
 */

var page = require('page');
var Editor = require('editor');
var Hashes = require('hash').Collection;
var data = require('hash').fakeApi;
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
  var hashes = new Hashes(data);
  var model = hashes.find(function(hash) {
    return hash.tag() === ctx.params.hash;
  });
  var content = '# ' + model.titleize() + '\n\n' + model.content()
  var searchList = new SearchList(hashes);
  editor.load(content);
}

