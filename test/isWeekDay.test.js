const assert = require('assert')
const isWeekDay = require('../isWeekDay')

describe('Is it a Week day?' ,function(){
    
    it('should return true if it is a weekday' ,function(){
        assert.equal(isWeekDay('Monday'),true);
        
    })
    
    it('Should return false if it is a weekend', function(){
        assert.equal(isWeekDay('Saturday'),false);
    })
})