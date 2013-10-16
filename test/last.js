var last = require('last');
var assert = require('assert');




describe('Last', function(){
  it('should return the last element of an Array', function(){
    var arr = ['olivier', 'bruno', 'amy'];
    var result = last(arr);
    assert(result.length === 1);
    assert(result[0] === 'amy');
  });

  it('should return the n last element of an Array', function(){
    var arr = ['olivier', 'bruno', 'amy'];
    var result = last(arr, 2);
    //TODO: do compare component
    assert(result.length === 2);
    assert(result[0] === 'bruno');
    assert(result[1] === 'amy');
  });

});
