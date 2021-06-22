// Variables
// What are they, bro?

// Variables are like boxes with labels into which you can put values.

var instrument = 'ukulele'

// Primitive datatypes:

// Strings
// Strings of characters

var beginning = 'Bobby\'s Lunch'
var ending = 'is being eaten'

var together = beginning + " " + ending

console.log(together)

// Numbers
// JavaScript does not differentiate between floats (decimal numbers) and integers.

20.3
3

var strNum = "3"
var actNum = 3

var result = actNum + strNum

console.log(typeof result)

// Booleans
// true or false

var isSunny = true

// Boolean expression
// You can use boolean expressions to execute bits of code depending on truthiness/falsiness

if (isSunny == true) {
  console.log("Go for a walk.") // between curly braces are 'code blocks'
}

console.log('4' === 4)

// double equals => only value is compared
// triple equals => value AND datatype are compared

// LOOPS
// 1. SENTRY
// 2. WHERE DOES IT START?
// 3. WHERE DOES IT END?
// 4. HOW DOES IT CHANGE?

for (var i = 1; i <= 10; i++) {
  console.log(i)
  // i++
}

console.log(i)

// Reference Datatypes
// Arrays

// Get and set values
// Arrays are 'zero-indexed'

var faveColors = ['red', 'orange', 'green']
              //    0        1         2

console.log(faveColors[1])

console.log(faveColors)

console.log(faveColors.length)

faveColors.pop()
console.log(faveColors)

function getTotal(arrayOfNumbers) {

  var sum = arrayOfNumbers[0];

  for(var i=0; i<arrayOfNumbers.length; i++) {
    sum += arrayOfNumbers[i];
    console.log("the current sum is: " + sum); 
  }

  console.log("the total is: " + sum);

}

getTotal([1, 3, 5]);