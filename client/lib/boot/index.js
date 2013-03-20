

/**
 * Dependencies
 */

var page = require('page');
var Hashes = require('hash').Collection;
var data = require('hash').fakeApi;
var MainView = require('main-view');


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
  var hashes = new Hashes(data);
  var mainView = new MainView(hashes);
  mainView.load(ctx.params.hash);
  document.body.appendChild(mainView.el);
}

