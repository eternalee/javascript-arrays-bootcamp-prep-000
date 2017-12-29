var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

var array = [];

function addElementToBeginningOfArray(x, array) {
  [x, ...array]
}

function destructivelyAddElementToBeginningOfArray(x, array) {
  array = [x, ...array]
}

function addElementToEndOfArray(x, array) {
  
}

function destructivelyAddElementToEndOfArray(x, array) {
  
}
console.log(array)

