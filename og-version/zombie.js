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

// first thing I know we need to do is install inquirer
var inquirer = require("inquirer");

// It says at the top I will need health and so will the zombie. I'm going to make these 2 variables
var userHP = 70;
var zombieHP = 15;

// The instructions say there are going to be 'rounds' of the game. That sounds like we will be repeating something over and over (we actually can see it in the example video) so because of that I'm going to make a function that I can reuse as many times as I need to.

function playGame() {
  // the instructions say I need to guess a number between 1 - 5 and in the video it looks like they're using inquirer to do it so I'm going to make that right here then check it. I may need to look at the inquirer documentation to see how to use it correctly. https://www.npmjs.com/package/inquirer

  inquirer
    .prompt([
      /* Pass your questions in here */
      // Looking at the documentation I can find a whole bunch of options for what a question can be. I'm going to look for 'list' because that's what the video was using and I need to give it a name and a message to display.
      {
        type: "list",
        name: "userGuess",
        message: "Try to stay alive! Guess a number between 1-5:",
        choices: [1, 2, 3, 4, 5]
      }
      // now that I've writtin my question I'm just going to console log that I can grab that it and see if I can check the value of my user's answer
    ])
    .then(answers => {
      // Use user feedback for... whatever!!
      //   console.log("The user guessed: ", answers.userGuess);
      // Now that I have the value of the user's guess I'm going to start building logic for what to do with it. first things first I need to make some random numbers for the zombie's guess and the damage.
      var zombieGuess = Math.floor(Math.random() * 5) + 1;
      var damage = Math.floor(Math.random() * 5) + 1;
      //now that I've built these I'm going to console.log them and see if I get a random number between 1-5. I'll have to pull these out of the function to test them.
      //Now that I know that they work I'm going to make an if/else for if the zo,bie guess is the same as the user guess are the same number or not
      if (zombieGuess === parseInt(answers.userGuess)) {
        // console.log("they are the same!");
        // cool cool, since we can check that condition now lets subtract the random damage we deal from the zombie hp.
        zombieHP -= damage;
        console.log("You hit the zombie for " + damage + " damage!");
        console.log("User HP: " + userHP + ". Zombie HP: " + zombieHP + ".");
        // rad, now that we can do the calculations for the zombie hp we should be able to do the exact same thing for the user so I'm just going to copy paste it.
        checkRound();
      } else {
        // console.log("the are different!");
        userHP -= damage;
        console.log("Oh no! You were hit for " + damage + " damage!");
        console.log("User HP: " + userHP + ". Zombie HP: " + zombieHP + ".");
        // cool cool. we can definitely check health now but we wanna see what happens if either the user or zombie gets to 0 and we win. If it's not zero we will want to call this function again and keep fighting the zombie. I think it would be great to build another function we can call to do that.
        checkRound();
      }
    });
}

function checkRound() {
  // im going to build a conditional that just checks if you died first. This seems easiest because you want to keep playing if you have more than 0 health.
  //these are just to add space
  console.log("");
  console.log("");

  if (userHP <= 0) {
    console.log("Total bummer. You definitely got killed by that zombie.");
    console.log("");

    process.exit();
  }
  if (zombieHP <= 0) {
    console.log(
      "Super Rad!! You killed the zombie and survived to see another day!!"
    );
    console.log("");

    process.exit();
  }

  // this is going to fire off every time now unless the above conditional statements are met and the game exits
  playGame();
  // The only problem we have now is that we have no way to exit the game. let's look up how to exit a function process.exit();
}

playGame();

// var zombieGuess = Math.floor(Math.random() * 5) + 1;
// var damage = Math.floor(Math.random() * 5) + 1;
// console.log("ZG: " + zombieGuess + " Damage: " + damage);
