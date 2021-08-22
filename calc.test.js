const assert = require('assert');
const expect = require('chai').expect;
const calc = require('./calc');

describe('Test calculator basics', () => {

  before(function () {
    console.log('Before!!!!');
   })
  it('basic add 2 + 2 => 4', function() {
    actual_result = calc.add(2, 2) // input data should come from db
    expected_result = 4 // expected data should come frome db
    assert.strictEqual(actual_result, expected_result);
  })
})

describe('Test calculation basic whith chai', () => {
  it.skip('basic mul 5 * 5 => 25', function() {
    actual_result = calc.multiply(5, 5)
    expected_result = 25
    expect(expected_result).to.equal(actual_result)
  })
})

// describe('hooks', function() {
//   before(function() {})
//   beforeEach(function() {})
//   after(function() {})
//   afterEach(function() {})
// });