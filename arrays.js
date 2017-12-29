var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

console.log(chocolateBars)

function addElementToBeginningOfArray(x) {
  [x, ...chocolateBars]
}

console.log(chocolateBars)

function destructivelyAddElementToBeginningOfArray(x) {
  chocolateBars = [x, ...chocolateBars]
}

addElementDestructivelyToBeginningOfArray("hi")
console.log(chocolateBars)

