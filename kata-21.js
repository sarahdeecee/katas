let number = 0;
let guessCount = 0;
let guesses = [];
let answer = "";

const generateNumber = function() {  
  return Math.floor(Math.random() * 100);
}

const guessNumber = function(answer) {
  answer = Number(answer); //Converts input to number type
  if (isNaN(answer)) { //Checks if not a number
    console.log("Not a number! Try again!");
  } else { //If input is a number
    console.log("You answered: " + answer);
    if (guesses.includes(answer)) { //If already guessed
      console.log("Already Guessed!");
    } else if (answer === number) { //If guess is correct
      guessCount++;
      if (guessCount === 1) {
        console.log("You got it! You took " + guessCount + " attempt!");
      } else {
        console.log("You got it! You took " + guessCount + " attempts!");
      }
    } else if (answer > number) { + //If guess is too high
      console.log("Too high!")
      guessCount++;
    } else if (answer < number) { //If guess is too low
      console.log("Too low!")
      guessCount++;
    }
  }
  guesses.push(answer); //Record all answers in array
}

number = generateNumber();

let prompt = require("prompt-sync")();

while (answer != number) {
  answer = prompt("Guess a number: ");
  guessNumber(answer);
}