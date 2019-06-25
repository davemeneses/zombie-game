// Variables
var inquirer = require("inquirer");
var userHP = 70;
var zombieHP = 15;

// Functions
function playGame() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "userGuess",
        message: "\nTry to stay alive! Guess a number between 1-5:",
        choices: [1, 2, 3, 4, 5]
      }
    ])
    .then(answers => {
      // console.log("The user guessed: ", answers.userGuess);
      var zombieGuess = Math.floor(Math.random() * 5) + 1;
      var damage = Math.floor(Math.random() * 5) + 1;
      if (zombieGuess === parseInt(answers.userGuess)) {
        // console.log("they are the same!");
        zombieHP -= damage;
        console.log("\nYou hit the zombie for " + damage + " damage!");
        console.log("User HP: " + userHP + ". Zombie HP: " + zombieHP + ".\n");
        checkRound();
      } else {
        // console.log("the are different!");
        userHP -= damage;
        console.log("\nOh no! You were hit for " + damage + " damage!");
        console.log("User HP: " + userHP + ". Zombie HP: " + zombieHP + ".\n");
        checkRound();
      }
    });
}

function checkRound() {
  if (userHP > 0 && zombieHP > 0) {
    playGame();
  } else if (userHP <= 0) {
    console.log(
      "#############################################################"
    );
    console.log("\nTotal bummer. You definitely got killed by that zombie.\n");
    console.log(
      "#############################################################"
    );
    playAgain();
  } else if (zombieHP <= 0) {
    console.log(
      "#############################################################"
    );
    console.log(
      "\nSuper Rad!! You killed the zombie and survived to see another day!!\n"
    );
    console.log(
      "#############################################################"
    );
    playAgain();
  }
}

function playAgain() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "playAgain",
        message: "Play Again?",
        choices: ["Yes", "No"]
      }
    ])
    .then(answers => {
      if (answers.playAgain === "Yes") {
        userHP = 70;
        zombieHP = 15;
        playGame();
      } else process.exit();
    });
}

playGame();
