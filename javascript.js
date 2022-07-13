   /* FINAL UPDATE: Took the long route around and added redundant code. Debugged and managed to reduce redundancy and got a perfectly working game!
      I'm leaving my commented-out code here as reference for future reviewing down the line to see where I went wrong

      Note: I must commit significant changes more, I got caught up in the rush and did it all one time, leaving a poor trail of what I did

      KonceptD(KJ) - 08 July 2022 - 16:25 pm 
   */
   
   // assigned strings to variables
    let rock = "rock"
    let paper = "paper"
    let scissors = "scissors"
    // let currentRound = 0;
    let playerSelection;
    let playerScore;
    let computerScore;
    // let over;

const rockBtn = document.getElementById('rockBtn')
const paperBtn = document.getElementById('paperBtn')
const scissorsBtn = document.getElementById('scissorsBtn')

rockBtn.addEventListener("click", () => {
    playerSelection = rock;
    console.log(playerSelection);
});
paperBtn.addEventListener("click", () => {
    playerSelection = paper;
    console.log(playerSelection);
});
scissorsBtn.addEventListener("click", () => {
    playerSelection = scissors;
    console.log(playerSelection);
});

// Players choice and caters for incorrect input
// function playerChoice(){
  
//     // playerSelection = newChoice
         
//     if (this == rockBtn) {
//         playerSelection = rock;
//         console.log(playerSelection);
//         return playerSelection;    

            
//         }
//     else if (playerSelection == paper) {
            
            
//         }
//     else if (playerSelection == scissors) {
            
            
//         }
//     else {
//             window.prompt("Incorrect input. Try again")
            
        
//     }
//     return playerSelection;
// }    

// initializes the computers random choice
function computerPlay() {
        // put variables into array
        let gamePlay = [rock, paper, scissors]
        // array returns a random choice of the 3 elements
        let final = gamePlay[Math.floor(Math.random() * gamePlay.length)]
    
        return final
    }

let computerSelection = computerPlay();    


function gameEngine () {

        
        if (playerSelection == rock && computerSelection == scissors) {
            playerScore++
            console.log("Player wins.\n" + "Player: " + playerScore + "\nComputer: " + computerScore)

        }
        else if (playerSelection == paper && computerSelection == rock) {
            playerScore++
            console.log("Player wins.\n" + "Player: " + playerScore + "\nComputer: " + computerScore)
            
        }
        else if (playerSelection == scissors && computerSelection == paper) {
            playerScore++
            console.log("Player wins.\n" + "Player: " + playerScore + "\nComputer: " + computerScore)

        }
        else if (computerSelection == rock && playerSelection == scissors) {
            computerScore++
            console.log("Computer wins.\n" + "Player: " + playerScore + "\nComputer: " + computerScore)

        }
        else if (computerSelection == paper && playerSelection == rock) {
            playerScore++
            console.log("Computer wins.\n" + "Player: " + playerScore + "\nComputer: " + computerScore)

        }
        else if (computerSelection == scissors && playerSelection == paper) {
            playerScore++
            console.log("Computer wins.\n" + "Player: " + playerScore + "\nComputer: " + computerScore)

        }
        else {
            console.log("Tie.\n" + "Player: " + playerScore + "\nComputer: " + computerScore)

        }
        return;
    }
    
// }

// Plays the game in the round number prompted - CURRENTLY COMMENTED OUT
// function playRound(rounds) {

//     playerScore = 0;
//     computerScore = 0;
        
//     for (let i = 0; i < rounds ; i++ ) {
//         playerChoice(); 
//         computerSelection
//         console.log("Round: " + (i+1))
//         gameEngine();
        

//     }

//     return console.log("Game Over");
// }


// // testing for pure randomness of elements
// console.log(computerPlay())

let rounds = window.prompt("How many rounds would you like to play? ")
playRound(rounds);

/* Instructions for adding : 
In our UI, the player should be able to play the game by clicking on buttons rather than typing their answer in a prompt.

    a) For now, remove the logic that plays exactly five rounds.
    -- DONE

    b) Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound 
    function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)
    -- DONE

    c) Add a div for displaying results and change all of your console.logs into DOM methods.

    d) Display the running score, and announce a winner of the game once one player reaches 5 points.

    e) You will likely have to refactor (rework/rewrite) your original code to make it work for this. 
    That’s OK! Reworking old code is an important part of a programmer’s life.

    f) Pretty it up

    g) Once you’re all done with your UI and made sure everything’s satisfactory, commit your changes to the rps-ui branch.


*/