

/**
 * Dependencies
 */

var HashList = require('hash-list')
var Collection = require('hash').Collection
var data = require('hash').fakeApi


describe('hash-list', function(){

  window.collection = new Collection(data)
  var hashList = new HashList(collection)

  it('should create a view', function(){
    document.body.appendChild(hashList.view)
  })

  it('should update view when item is added')
  it('should update view when item is removed')
  it('should update list items when attributes change') // tag, content

})
