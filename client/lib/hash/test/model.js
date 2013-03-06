

/**
 * Dependencies
 */

var Hash = require('hash').Model;


describe('Hash.Model', function(){

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


      it('should emit "change" event', function (done) {

        var changeEvent = new Hash({ tag: 'default-tag' })
        var previousValue = changeEvent.tag()

        changeEvent.on('change', function (name, val, prev) {
          name.should.equal('tag')
          val.should.equal('testing-change-event')
          prev.should.equal(previousValue)
          done()
        })

        changeEvent.tag('testing-change-event')

      })


      it('should emit "change tag" event', function (done) {

        var changeTagEvent = new Hash({ tag: 'default-tag' })
        var previousValue = changeTagEvent.tag()

        changeTagEvent.on('change tag', function (val, prev) {
          val.should.equal('testing-change-tag-event')
          prev.should.equal(previousValue)
          done()
        })

        changeTagEvent.tag('testing-change-tag-event')

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


      it('should emit "change" event', function (done) {

        var changeEvent = new Hash({ content: 'Default hash content' })
        var previousValue = changeEvent.content()

        changeEvent.on('change', function (name, val, prev) {
          name.should.equal('content')
          val.should.equal('This is the new content')
          prev.should.equal(previousValue)
          done()
        })

        changeEvent.content('This is the new content')

      })


      it('should emit "change content" event', function (done) {

        var changeTagEvent = new Hash({ content: 'blah blah blah' })
        var previousValue = changeTagEvent.content()

        changeTagEvent.on('change content', function (val, prev) {
          val.should.equal('asdf 1234 foo')
          prev.should.equal(previousValue)
          done()
        })

        changeTagEvent.content('asdf 1234 foo')

      })

    })

    describe('titleize', function(){

      it('should return a properly formatted title', function(){
        initial.tag('testing-the-titleize-method')
        initial.titleize().should.equal('Testing The Titleize Method')
      })

    })

 })
