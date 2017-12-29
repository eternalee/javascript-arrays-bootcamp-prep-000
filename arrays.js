var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

var array = [];

function addElementToBeginningOfArray(x) {
  [x, ...array]
}

function destructivelyAddElementToBeginningOfArray(x) {
  array = [x, ...array]
}

function addElementToEndOfArray() {
  
}

function destructivelyAddElementToEndOfArray() {
  
}
console.log(array)

