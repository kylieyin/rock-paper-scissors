const buttons = document.querySelectorAll('button');
const options = ["rock", "paper", "scissors"];
// declares a constant variable defined as 'options' 
// assigns an array to the variable which contains the values 'rock', 'paper' and 'scissors'
// note: square brackets are used to define an array - which is a collection of values
let playerScore = 0;
let otterScore = 0;

function otterPlay() {
    return options[Math.floor(Math.random() * options.length)];
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

function disableButtons() {
    buttons.forEach(button => {
        button.disabled = true
    });
}

function roundStart(playerSelection) {
    let otterSelection = otterPlay();
    let result = "";

    if (playerSelection === "rock" && otterSelection === "scissors" ||
        playerSelection === "paper" && otterSelection === "rock" ||
        playerSelection === "scissors" && otterSelection === "paper") 
    {
        playerScore += 1;
        result = "you win this round! " + playerSelection + " beats " + otterSelection + 
        "<br><br>Player Score: " + playerScore + "<br>Otter Score: " + otterScore;
        
        if (playerScore === 5) {
            result += "<br><br>you won the game! reload page to play again";
            disableButtons();
        }
    }
    
    else if (playerSelection === otterSelection) {
        result = "it's a tie! you both chose " + playerSelection + "<br><br>Player Score: " + playerScore + "<br>Otter Score: " + otterScore;
               
    } 
    
    else {
        otterScore += 1;
        result = "you lost this round! " + otterSelection + " beats " + playerSelection + 
        "<br><br>Player Score: " + playerScore + "<br>Otter Score: " + otterScore; 
        if (otterScore === 5) {
        result += "<br><br>otter won the game! reload page to play again"
        disableButtons();
      }
    }

    return result;

}
// declares a constant variable defined as 'playerChoice'
// the function 'prompt()' displays a dialog box that asks player to input text and returns text entered 
// the function '.toLowerCase() converts the player's input to lowercase so it match the options in the array


buttons.forEach(button => {
    button.addEventListener("click", function(){
        document.getElementById("result").innerHTML = roundStart(button.id);
    });
});

