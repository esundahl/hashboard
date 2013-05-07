

/*!
 * # Dependencies
 */

var page = require('page');
var Hashes = require('hash').Collection;
var MainView = require('main-view');


/*!
 * # Private Variables
 */

var hashes;
var mainView;
var data;


/**
 * # Routes
 */

page('*', init);
page('/', index);
page('/hash/:hash', hash);
page();


/*!
 * Constructor
 *
 * @return {Type}
 * @api public
 */

function init(ctx, next) {
  hashes = hashes || new Hashes(data).fetch();
  mainView = mainView || new MainView(hashes);
  document.body.appendChild(mainView.el);
  next();
}


/**
 * Index
 *
 * @param {Type} name
 * @return {Type}
 * @api public
 */

function index(ctx, next) {
  // body...
}


/**
 * Hash
 *
 * @param {Object} ctx
 * @api public
 */

function hash(ctx, next) {
  var activeModel = hashes.findByTag(ctx.params.hash);
  mainView.load(activeModel);
  hashes.setActiveHash(activeModel);
}
