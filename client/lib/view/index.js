

/**
 * Dependencies
 */

var Emitter = require('emitter');




/**
 * Constructor Function
 *
 * @param {Object} options
 * @return {View}
 * @api public
 */

function View (options) {

	this.subViews();
	this.events();

	return this;
}
Emitter(View.prototype);





/**
 * Exports
 */

module.exports = View;
