
/**
 * Dependencies
 */

var should = require('chai').should()
var http = require('http')
var server = require('../app.js')

describe('Server', function(){

  it('should respond to requests', function(done){
    http.get('http://localhost:3000/', function (res) {
      res.statusCode.should.equal(200)
      done()
    })
  })

})
