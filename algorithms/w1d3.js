var isSunny = false;
var temperature = 45; // let's assume degrees Fahrenheit
var isRaining = true;
var whatToBring = "I should bring: ";
    
if(isSunny) {
  whatToBring += "sunglasses, ";
}

if(temperature < 50) {
  whatToBring += "a coat, ";
}

if(isRaining) {
  whatToBring += "an umbrella, ";
}

whatToBring += "and a smile!";

console.log(whatToBring);

var age = 12
var output = ''


if (age >= 21 && age < 50) {
  output += "go see that PG-13 movie and get your driver's license, and an R-rate movie ticket and have a beer on me"
} else if (age >= 17 && age < 21) {
  output += "go see that PG-13 movie and get your driver's license, and an R-rated movie ticket"
} else if (age >= 16 && age < 17) {
  output += "go see that PG-13 movie and get your driver's license"
} else if (age >= 13 && age < 16 ) {
  output += "go see that PG-13 movie"
} else if (age < 13) {
  output += "Play fortnite"
} else {
  output += "you're old."
}

console.log(output)