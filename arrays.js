var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

var array = [];

function addElementToBeginningOfArray(array, x) {
  return [x, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, x) {
  array.unshift(x);
  return array
}

function addElementToEndOfArray(array, x) {
  return [...array, x]
}

function destructivelyAddElementToEndOfArray(array, x) {
  array.push(x);
  return array
}

function 