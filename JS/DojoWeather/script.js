var unit = document.querySelector('#unit-choice').value
// var unitSelector = document.querySelector('#unit-choice')
// unitSelector.addEventListener('onchange', changeUnit)
var temps = document.getElementsByClassName('temps')
for (let i = 0; i < temps.length; i++){
  console.log(temps[i].innerHTML)
}

function changeUnit(element) {
  unit = element.value
  convertToFahreinheit(unit)
}

function convertToFahreinheit(unit) {
  // To convert temperatures in degrees Celsius to Fahrenheit, multiply by 1.8 (or 9/5) and add 32.
  if(unit == 'F'){
    for (let i = 0; i < temps.length; i++){
      temps[i].innerHTML = Math.round((temps[i].innerHTML * 1.8 + 32) * 10) / 10
    } 
  } else {
    // To convert temperatures in degrees Fahrenheit to Celsius, subtract 32 and multiply by .5556 (or 5/9).
    for (let i = 0; i < temps.length; i++){
      temps[i].innerHTML = Math.round(((temps[i].innerHTML - 32) * .5556) * 10) / 10
    } 
  }
}