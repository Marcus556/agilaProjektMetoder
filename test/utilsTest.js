import assert from 'assert';
import utils from '../utils.js';

describe('Multiply', function () {
  it('Function should mutiply the numbers and return the right result', function () {
    assert.equal(utils.multiply(3, 3), 9)
  })
  it('Function return a integer', function () {
    const res = utils.multiply(3, 3);
    assert.equal(typeof (res), 'number')
  })
})

describe('Divide', function () {
  it('Function should divide the numbers and return the right result', function () {
    assert.equal(utils.divide(3, 3), 1)
  })
  it('Function return a integer', function () {
    const res = utils.multiply(3, 3);
    assert.equal(typeof (res), 'number')
  })

})

describe('Subtract', function () {
  it('Function should subtract the numbers and return the right result', function () {
    assert.equal(utils.subtract(3, 3), 0)
  })
  it('Function return a integer', function () {
    const res = utils.multiply(3, 3);
    assert.equal(typeof (res), 'number')
  })
})

describe('Add', function () {
  it('Function should add the numbers and return the right result', function () {
    assert.equal(utils.multiply(3, 3), 9)
  })
  it('Function return a integer', function () {
    const res = utils.multiply(3, 3);
    assert.equal(typeof (res), 'number')
  })
})

describe('Add to storage function', function () {
  it('Function should return an array the length 4', function () {
    const testArray = utils.addToStorageArray([100, 433, 623, 20], 2, 1)
    assert.equal(testArray.length, 4)
  })
  it('Function should return an array with right values', function () {
    function compare() {
      let testArray = utils.addToStorageArray([0, 200, 300, 400], 0, 100);
      const compArray = [100, 200, 300, 400];
      let bool = true;
      testArray.forEach((item, index) => {
        if (item == compArray[index]) return
        else bool = false;
      })
      return bool;
    }
    assert.equal(compare(), true)
  })
  it('The value passed in to the array should be a integer', function () {
    assert.equal(typeof (utils.addToStorageArray([0, 200, 300, 400], 0, 100)[0]) == 'number', true)
  })
})