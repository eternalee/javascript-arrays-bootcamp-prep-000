var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

var array = [];

function addElementToBeginningOfArray(x, array) {
  [x, ...array]
}

function destructivelyAddElementToBeginningOfArray(x, array) {
  array = [x, ...array]
}

function addElementToEndOfArray(x, array) {
  [...array, x]
}

function destructivelyAddElementToEndOfArray(x, array) {
  array = [...array, x]
}
console.log(array)

