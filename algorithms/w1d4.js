// Functions

// Fun with Functions!!!!11!

// What is a function?
// A function is a series of steps to solve a problem.

// Camel Case

function sayHello(time, name) {
  console.log("Good " + time + " " + name + "!")
}

sayHello("morning", "Malorie")

// Print Max of Array
// printMaxOfArray(arr)
// Given an array, find and print its largest element.

var myString = "Hello"

function printMaxOfArray(arr) {
  // create variable called max and set it to the value of the first element
  var max = arr[0]
  // Go through each element in array with for loop
  for (var i = 1; i < arr.length; i++){
    // compare each to max
    if(arr[i] > max) {
      // if we find a greater value, make that value the new max
      max = arr[i]
    }
  }
  // print max
  // console.log(max)
  // return max 
  return max
}

console.log(printMaxOfArray([1, 2, 4, 5, 7, 33, 1, 6]))