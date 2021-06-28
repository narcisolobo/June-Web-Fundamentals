var floor = Math.floor(1.8);
var ceiling = Math.ceil( Math.PI );
console.log(Math.PI)
var random = Math.random();

console.log(floor);
console.log(ceiling);
console.log(random);

function d6() {
  var roll = Math.random();
  roll = Math.ceil(Math.random() * 6);
  return roll;
}


var playerRoll = d6();
// Template Literal
console.log(`The player rolled: ${playerRoll}`);

d6()

function magic8Ball() {
  var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
  ];
  var randIdx = Math.floor(Math.random() * lifesAnswers.length);
  var answer = lifesAnswers[randIdx]
  return answer;
}

for (let i = 0; i < 100; i++){
  console.log(magic8Ball())
}