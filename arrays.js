var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBegginingOfArray() {
  
}

function destructivelyAddElementToBeginningOfArray() {
  
}


//////////////////////////////
var array = ["Happy", "Sad"];

console.log(array);

function addElementToBeginningOfArray(element) {
  [element, ...array]
}
addElementToBeginningOfArray("hi");
console.log(array)

function addElementDestructivelyToBeginningOfArray(element) {
  array = [element, ...array]
}
addElementDestructivelyToBeginningOfArray("hi")
console.log(array);


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