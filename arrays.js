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

//////////////////////////////


var cats = ["milo", "garfield", "otis"]
function removeElementFromBeginningOfArray(x) {
  cats = cats.slice(x)
}
removeElementFromBeginningOfArray(1)
console.log(cats)

var iceCreams = ["cho", "strawb", "rockyroad"]
console.log(iceCreams)
function destructivelyRemoveElementFromEndOfArray() {
  iceCreams.pop()
}
destructivelyRemoveElementFromEndOfArray()
console.log(iceCreams)