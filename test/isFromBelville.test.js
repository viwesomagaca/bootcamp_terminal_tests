const assert = require('assert')
const isFromBelville = require('../isFromBelville')

describe('isFromBellville', function () {

    it('should return true if the registration number is from belville', function () {
        assert.equal(isFromBelville("CY 123"),true);
    });
        
    it('should return false if the registration number is not from belville', function(){
        assert.equal(isFromBelville("CB 598"),false);
    });
});

