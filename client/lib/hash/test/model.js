

/**
 * Dependencies
 */

var Hash = require('hash').Model;


describe('Hash', function(){

    var blank = new Hash()
    var initial = new Hash({
      tag: 'hash-initialized-with-values',
      content: 'This hash was intitialized by passing it a hash of values'
    })

    describe('tag', function(){

      it('default value')

      it('initialize with value', function(){
        initial.tag().should.equal('hash-initialized-with-values')
      })

      it('set value', function(){
        initial.tag('my-tag');
        initial.tag().should.equal('my-tag')
      })

    })

    describe('content', function(){

      it('default value')

      it('initialize with value', function(){
        initial.content().should.equal('This hash was intitialized by passing it a hash of values')
      })

      it('set value', function(){
        initial.content('This content was set using the content accessor method')
        initial.content().should.equal('This content was set using the content accessor method')
      })

    })

    describe('titleize', function(){

      it('should return a properly formatted title', function(){
        initial.tag('testing-the-titleize-method')
        initial.titleize().should.equal('Testing The Titleize Method')
      })

    })


})
