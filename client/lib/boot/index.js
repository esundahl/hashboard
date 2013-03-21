

/**
 * Dependencies
 */

var page = require('page');
var Hashes = require('hash').Collection;
var data = require('hash').fakeApi;
var MainView = require('main-view');


/**
 * Private Variables
 */

var hashes;
var mainView;


/**
 * Routes
 */

page('*', init);
page('/', index);
page('/hash/:hash', index);
page();


/**
 * Init
 *
 * @return {Type}
 * @api public
 */

function init(ctx, next) {
  hashes = hashes || new Hashes(data);
  mainView = mainView || new MainView(hashes);
  document.body.appendChild(mainView.el);
  next();
}


/**
 * Index
 *
 * @param {Object} ctx
 * @api public
 */

function index(ctx, next) {
  mainView.load(ctx.params.hash);
}
