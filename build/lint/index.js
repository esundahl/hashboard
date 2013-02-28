

/**
 * Dependencies
 */

var jshint = require('jshint').JSHINT;
var fs = require('fs');


/**
 * Validates sourceCode using JSHint
 *
 * @param {String} sourceCode
 * @param {Object} options
 * @param {Object} globals
 * @param {String} description
 * @return {Boolean}
 * @api public
 */

exports.validateSource = function (sourceCode, options, globals, description) {
  var pass;  
  description = description + ' ' || '';
  pass = jshint(sourceCode, options, globals);
  if (pass) console.log(description + 'ok');
  else {
    console.log(description + 'failed');
    jshint.errors.forEach(function (error) {
      console.log(error.line + ": " + error.evidence.trim());
			console.log("   " + error.reason);
    });
  }
  return pass;
};


/**
 * Validates a file using jshint
 *
 * @param {String} filename
 * @param {Object} options
 * @param {Object} globals
 * @return {Boolean}
 * @api public
 */

exports.validateFile = function(filename, options, globals) {
	var sourceCode = fs.readFileSync(filename, "utf8");
	return exports.validateSource(sourceCode, options, globals, filename);
};


/**
 * Validates a list of files using jshint
 *
 * @param {Array} fileList
 * @param {Object} options
 * @param {Object} globals
 * @return {Boolean}
 * @api public
 */

exports.validateFileList = function(fileList, options, globals) {
	var pass = true;
	fileList.forEach(function(filename) {
		pass = exports.validateFile(filename, options, globals) && pass;
	});
	return pass;
};
