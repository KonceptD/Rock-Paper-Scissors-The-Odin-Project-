   /* UPDATE: Took the long route around and added redundant code. Debugged and managed to reduce redundancy and got a perfectly working game!
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
    let choice;
    // let over;

const rockBtn = document.getElementById('rockBtn')
rockBtn.addEventListener("click", () => {choice = rock;})
const paperBtn = document.getElementById('paperBtn')
paperBtn.addEventListener("click", () => {choice = paper;})
const scissorsBtn = document.getElementById('scissorsBtn')
scissorsBtn.addEventListener("click", () => {choice = scissors;})

function playerChoose () {
    
     
        if (choice == rock) {
            playerSelection = rock;
            return playerSelection;
            

        }
        else if (choice == paper) {
            playerSelection = paper;
            return playerSelection;
          

        }
        else if (choice == scissors) {
            playerSelection = scissors;
            return playerSelection;
          

        }
}

function playerChoice(choice) {
    
    if (choice == 'rock') {
        playerSelection = rock;
        console.log(playerSelection);
        return playerSelection;
    }
    else if (choice == paper) {
        playerSelection = paper;
        console.log(playerSelection);
        return playerSelection;
    }
    else if (choice == scissors) {
        playerSelection = scissors;
        console.log(playerSelection);
        return playerSelection;
    }

}

// paperBtn.addEventListener("click", (e))) {
//     playerSelection = paper;
//     console.log(playerSelection);
//     return playerSelection;

const divScoreBoard = document.querySelector('#scoreboard');
const divScore = document.createElement('div');
divScore.classList.add('Score')
// divScore.textContent = playerScore;
// divScoreBoard.appendChild(divScore);



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
            divScore.textContent = "Player wins.\n" + "Player: " + playerScore + "\nComputer: " + computerScore;
            divScoreBoard.appendChild(divScore);
            // console.log("Player wins.\n" + "Player: " + playerScore + "\nComputer: " + computerScore)

        }
        else if (playerSelection == paper && computerSelection == rock) {
            playerScore++
            divScore.textContent = "Player wins.\n" + "Player: " + playerScore + "\nComputer: " + computerScore;
            divScoreBoard.appendChild(divScore);
            // console.log("Player wins.\n" + "Player: " + playerScore + "\nComputer: " + computerScore)
            
        }
        else if (playerSelection == scissors && computerSelection == paper) {
            playerScore++
            divScore.textContent = "Player wins.\n" + "Player: " + playerScore + "\nComputer: " + computerScore;
            divScoreBoard.appendChild(divScore);
            // console.log("Player wins.\n" + "Player: " + playerScore + "\nComputer: " + computerScore)

        }
        else if (computerSelection == rock && playerSelection == scissors) {
            computerScore++
            divScore.textContent = "Computer wins.\n" + "Player: " + playerScore + "\nComputer: " + computerScore;
            divScoreBoard.appendChild(divScore);
            // console.log("Computer wins.\n" + "Player: " + playerScore + "\nComputer: " + computerScore)

        }
        else if (computerSelection == paper && playerSelection == rock) {
            playerScore++
            divScore.textContent = "Computer wins.\n" + "Player: " + playerScore + "\nComputer: " + computerScore;
            divScoreBoard.appendChild(divScore);
            // console.log("Computer wins.\n" + "Player: " + playerScore + "\nComputer: " + computerScore)

        }
        else if (computerSelection == scissors && playerSelection == paper) {
            playerScore++
            divScore.textContent = "Computer wins.\n" + "Player: " + playerScore + "\nComputer: " + computerScore;
            divScoreBoard.appendChild(divScore);
            // console.log("Computer wins.\n" + "Player: " + playerScore + "\nComputer: " + computerScore)

        }
        else {
            divScore.textContent = "Tie.\n" + "Player: " + playerScore + "\nComputer: " + computerScore;
            divScoreBoard.appendChild(divScore);
            // console.log("Tie.\n" + "Player: " + playerScore + "\nComputer: " + computerScore)

        }
        return;
    }
    
// }

//* Plays the game in the round number prompted 
function playRound() {

    while (true) {
        playerScore = 0;
        computerScore = 0;
        let round = 0;
        playerChoose();
        playerChoice(); 
        computerSelection;
        console.log("Round: " + (round++))
        gameEngine();
    }
        

    

    
}


// // testing for pure randomness of elements
// console.log(computerPlay())
playRound();

/* Instructions for adding : 
In our UI, the player should be able to play the game by clicking on buttons rather than typing their answer in a prompt.

    a) For now, remove the logic that plays exactly five rounds.
    -- DONE

    b) Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound 
    function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)
    -- DONE

    c) Add a div for displaying results and change all of your console.logs into DOM methods.
    -- DONE

    d) Display the running score, and announce a winner of the game once one player reaches 5 points.

    e) You will likely have to refactor (rework/rewrite) your original code to make it work for this. 
    That’s OK! Reworking old code is an important part of a programmer’s life.

    f) Pretty it up

    g) Once you’re all done with your UI and made sure everything’s satisfactory, commit your changes to the rps-ui branch.


*/