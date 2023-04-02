
const options = ["rock", "paper", "scissors"];
// declares a constant variable defined as 'options' 
// assigns an array to the variable which contains the values 'rock', 'paper' and 'scissors'
// note: square brackets are used to define an array - which is a collection of values


function getPlayerChoice() {
    return prompt("Choose rock, paper, or scissors:").toLowerCase();
}
// declares a constant variable defined as 'playerChoice'
// the function 'prompt()' displays a dialog box that asks player to input text and returns text entered 
// the function '.toLowerCase() converts the player's input to lowercase so it match the options in the array

function getOtterChoice() {
    const otterChoice = options[Math.floor(Math.random() * options.length)];
    return otterChoice;
}

// declares a constant variable defined as 'computerChoice'
// assigns the earlier defined array 'options' to 'computerChoice'
// 'Math.random()' generates a random number between 0 and 1
// 'options.length' determines the number of elements in the 'options' array (being 3)
// the random number generated is then multiplied by the length of the options aray (3) 
// so 'Math.random() * options.length' generates a random decimal number between 0 and 3
// 'Math.floor' is a function that rounds a number to the nearest integer (a whole number)
// this means the decimal number is passed to 'Math.floor()' to round it down to the nearest whole number
// this gives a random index to select a random option from the array
// note: the square brackets are used to access an element in the 'options' array 

function determineWinner(playerChoice, otterChoice) {
    if (playerChoice === otterChoice) {
        return "it's a tie!";
    }
    const outcomes = {
        rock: {rock: "tie", paper: "lose", scissors: "win"},
        paper: {rock: "win", paper: "tie", scissors: "lose"},
        scissors: {rock: "lose", paper: "win", scissors: "tie"}
    };
    const outcome = outcomes[playerChoice][otterChoice];
    const message = {
        win: "you win!",
        lose: "you lose!",
        tie: "its a tie!"
    };
    return message[outcome];
}

function playGame() {
  let playAgain = true;
  while (playAgain) {
    const playerChoice = getPlayerChoice();
    const otterChoice = getOtterChoice();
    console.log(`you chose ${playerChoice}.`);
    console.log(`otter chose ${otterChoice}.`); 
    console.log(determineWinner(playerChoice, otterChoice));
    const choice = prompt("play again? (type yes/no)");
    if (choice.toLowerCase() !== "yes") {
        playAgain = false;
    }
  }
}

