

/**
 * Dependencies
 */

var Hash = require('hashes').Model;


describe('Hashes', function(){

  it('titleized', function(){
    var hash = Hash({ hash: 'the-quick-brown-fox' });
    hash.titlelized().should.equal('The Quick Brown Fox')
  })

})
