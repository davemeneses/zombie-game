// INSTRUCTIONS: Build a command-line based zombie fighting game.
// =========================================================================================================

// In this game, you and a zombie will each be given a certain amount of health. (Perhaps: You 70, Zombie 15).

// For each round, you will be asked to guess a random number between 1 and 5.
// If your guess matches the random number of the Zombie -- you inflict a random amount of damage between 1 and 5.
// If you guess does not match the random number of the Zombie -- the Zombie inflicts a random amount of damage to you between 1 and 5.
// Each round the zombie is given a new random number and you must guess again.

// The game ends when you or the zombie gets to 0 health.

// Note: You should use the inquirer package to take in user commands.
// Major Warning: inquirer's prompt function is "asynchronous", which means that the majority of your game logic will need to be inside the .then() function for your prompt.

// ===========================================================================================================
var inquirer = require("inquirer");

var userHP = 70;
var zombieHP = 15;

function playGame() {
  inquirer
    .prompt([
      /* Pass your questions in here */
      {
        type: "list",
        name: "userGuess",
        message: "Try to stay alive! Guess a number between 1-5:",
        choices: [1, 2, 3, 4, 5]
      }
    ])
    .then(answers => {
      // Use user feedback for... whatever!!
      console.log("User guess: " + answers.userGuess);
      var zombieGuess = Math.floor(Math.random() * 5) + 1;
      var damage = Math.floor(Math.random() * 5) + 1;
      // if userGuess == zombieGuess
      // subtract the damage from the zombieHP
      // console.log how much health is left for the zombie
      // else subtract damage from userHP
      checkRound();
    });
}

// build a new function that checks if you won or lost
function checkRound() {
  // if userHP <= 0 consolelog (you lost!)
  // if zombieHP <= 0 console.log(you won!)
  // look up process.exit(). I would use this instead of break here but check out both

  playGame();
}

playGame();

// var zombieGuess = Math.floor(Math.random() * 5) + 1;
// var damage = Math.floor(Math.random() * 5) + 1;

// console.log("ZG: " + zombieGuess + " Damage: " + damage);
