var fruit1 = "apples";
var fruit2 = "oranges";

fruit2 = fruit1;

console.log(fruit2 + " and " + fruit1);

var fruit1 = "apples";
var fruit2 = "oranges";

var temp = fruit1; // temp is a common name for this
fruit1 = fruit2;
fruit2 = temp;

console.log(fruit2 + " and " + fruit1);

// 1. Sentry
// 2. Where it starts
// 3. Where it ends
// 4. How it changes

var start = 0;
var end = 12;

while(start < end) {
    console.log("start: " + start + ", end: " + end);
    start += 2; // start = start + 2
    end -= 2;
}

console.log("start: " + start + ", end: " + end);

// PSEUDOCODE
// Write a loop that starts at 0, ends at the middle of the array, and increments by 1
// Save the left partner's value in a temp variable
// Safely overwrite the left with the value of the right
// Overwrite the right with what we saved in temp
// How do we move the right towards the middle?

var myArr = ['a', 'b', 'c', 'd', 'e']

function reverse(arr) {
  for (var i = 0; i < Math.floor(arr.length/2); i++){
    var temp = arr[i];
    arr[i] = arr[arr.length-1-i];
    arr[arr.length-1-i] = temp;
    console.log(arr);
  }
  return arr;
}

reverse(myArr);