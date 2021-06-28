// What is the DOM?
// Document Object Model

console.dir(this)

var title = document.querySelector("#title")
var sonic = document.querySelector('#sonic')
title.innerHTML = "I have changed you."
title.style.backgroundColor = "red"

function toggle(element) {
  element.innerHTML = "OFF"
}

function remove(element) {
  element.remove()
}

// JS Objects
// An object has characteristics (properties) and things that it can do (methods).

// var myArray = [1, 2, 3, 4, 5]

// console.log(myArray[0])
// myArray[1] = 13

// myArray.push(6)
// console.log(myArray)

// console.log(myArray.length)

// Object Literals

var myCar = {
  numWheels: 4,
  make: "Jeep",
  model: "Wrangler",
  isNew: false,
  drive: function() {
    console.log("Driving...")
  },
  showStats: function() {
    console.log(`Your car has the following characteristics:\nNumber of wheels: ${this.numWheels}`)
  }
}

// bracket notation
// myCar["numWheels"] = 2
// console.log(myCar["numWheels"])

// myCar.numWheels = 4
// console.log(myCar.numWheels)

myCar.showStats()