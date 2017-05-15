const assert = require('assert')
const findItermsOver2 = require('../findItermsOver20')

describe( 'Iterms over 20 function',  function() {
    
  it('Should return iterms that are over 20' ,function(){
	  
var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
     
 ]
  assert.deepEqual(findItermsOver2(itemList), [{name : 'pears', qty : 37}, {name : 'bananas', qty : 27}] );
   });
 });
