var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];


function addElementToBeginningOfArray(x) {
  [x, ...array]
}

function destructivelyAddElementToBeginningOfArray(x) {
  chocolateBars = [x, ...chocolateBars]
}

addElementDestructivelyToBeginningOfArray("hi")
console.log(chocolateBars)

