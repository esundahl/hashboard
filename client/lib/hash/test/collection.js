

/**
 * Dependencies
 */

var Collection = require('hash').Collection
var Model = require('hash').Model
var data = require('hash').fakeApi


describe('Hash.Collection', function(){

  describe('add', function(){

    it('should implement an add method', function(){
      var collection = new Collection(data)
      collection.add.should.be.a('function')
    })

    it('should fire an "add" event', function(done){
      var model = new Model()
      var collection = new Collection(data)
      collection.on('add', function (data) {
        data.should.equal(model)
        done()
      })
      collection.add(model)
    })

  })

  describe('remove', function(){

    it('should implement a remove method', function(){
      var collection = new Collection(data)
      collection.remove.should.be.a('function')
    })

    it('should remove an model', function(){
      var collection = new Collection(data)
      var originalLength = collection.length()
      collection.remove(1)
      collection.length().should.equal(originalLength - 1)
    })

    it('should fire a "remove" event', function(done){
      var collection = new Collection(data)
      var originalLength = collection.length()
      collection.on('remove', function () {
        collection.length().should.equal(originalLength - 3)
        done()
      })
      collection.remove(1,3)
    })

  })

})
