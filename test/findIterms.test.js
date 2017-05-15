const assert = require('assert')
const findItemsOver = require('../findIterms')

describe('The Iterms over Threshhold Function' , function(){
    
    it('should return products that have quantity higher than the threshold' , function(){
     var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
     
 ]   
        assert.deepEqual(findItemsOver(itemList), [] )
    })
})