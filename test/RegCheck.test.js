const assert = require('assert')
const RegCheck = require('../RegCheck')

describe('Registration Number Check', function () {

    it('should return true if the registration number is from the same Location', function () {
        assert.equal(RegCheck("DV 23 NB GP","GP"),true);
    });
        
    it('should return false if the registration number is not from the same location', function(){
        assert.equal(RegCheck("DV 23 NB GP","CY"),false);
    });
});
