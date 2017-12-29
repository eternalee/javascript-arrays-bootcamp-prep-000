var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

var array = [];

function addElementToBeginningOfArray(array, x) {
  return [x, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, x) {
  return array = [x, ...array]
}

function addElementToEndOfArray(array, x) {
  [...array, x]
}

function destructivelyAddElementToEndOfArray(array, element) {
  array = [...array, x]
}
console.log(array)

