var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

var array = [];

function addElementToBeginningOfArray(array, x) {
  return [x, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, x) {
  array.unshift(x)
  return array
}

function addElementToEndOfArray(array, x) {
  [...array, x]
}

function destructivelyAddElementToEndOfArray(array, x) {
  array = [...array, x]
}
console.log(array)

