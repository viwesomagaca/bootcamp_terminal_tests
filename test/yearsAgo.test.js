const assert = require('assert')
const yearsAgo = require('../yearsAgo')
describe('How many years ago', function(){
    
    it('Should return the number of years ago from today', function(){
        assert.equal(yearsAgo('1995'),22);
    })
})