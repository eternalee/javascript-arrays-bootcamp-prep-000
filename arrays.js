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

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
 array.shift() 
 return array
}

function removeElementFromBeginningOfArray(array) {
  array.slice(1)
  return array
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}