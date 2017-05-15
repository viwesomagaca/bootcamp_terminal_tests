const assert = require('assert')
const countAllFromTown = require('../allFromTown')

describe('Counting all from Town', function(){
	it('Should return the length of all Reg numbers from Stelenbosch', function(){
		
var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');

//fromStellies should contains
assert.deepEqual(fromStellies, 3)
	})
})