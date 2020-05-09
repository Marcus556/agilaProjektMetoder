export default {
  multiply: function (x, y) {
    return Number(x * y)
  },
  divide: function (x, y) {
    return Number(x / y)
  },
  add: function (x, y) {
    return Number(x + y)
  },
  subtract: function (x, y) {
    return Number(x - y)
  },
  addToStorageArray: function (array, arrayPos, valueToAdd) {
    let tempArray = array;
    tempArray[arrayPos] = Number(valueToAdd);
    return tempArray
  }
}