var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

var array = [];

function addElementToBeginningOfArray(x) {
  [x, ...array]
}

function destructivelyAddElementToBeginningOfArray(x) {
  chocolateBars = [x, ...chocolateBars]
}

addElementDestructivelyToBeginningOfArray("hi")
console.log(chocolateBars)

