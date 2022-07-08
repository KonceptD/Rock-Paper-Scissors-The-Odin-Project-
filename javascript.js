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

// Players choice and caters for incorrect input
function playerChoice(){
    while (true) {
        playerSelection = window.prompt("Rock, Paper or Scissors?: ").toLowerCase();
         
        if (playerSelection == rock) {
            break;
            
        }
        else if (playerSelection == paper) {
            break;
            
        }
        else if (playerSelection == scissors) {
            break;
            
        }
        else {
            window.prompt("Incorrect input. Try again")
            continue;
        }
        
    }
return playerSelection;
}    

// initializes the computers random choice
function computerPlay() {
        // put variables into array
        let gamePlay = [rock, paper, scissors]
        // array returns a random choice of the 3 elements
        let final = gamePlay[Math.floor(Math.random() * gamePlay.length)]
    
        return final
    }

let computerSelection = computerPlay();    

// // to determine when the round ends
// function roundEngine () {
//     if (currentRound == rounds) {
//         over = "over"
//         return over
//     } 
//     else {
//         let over = "ongoing"
//         return over 
//     }
// }

// determines the winner
function gameEngine () {

    // playerScore = 0;
    // computerScore = 0;
    
    // while (true) {

        
        if (playerSelection == rock && computerSelection == scissors) {
            playerScore++
            console.log("Player wins.\n" + "Player: " + playerScore + "\nComputer: " + computerScore)
            
            // currentRound++
            // roundEngine();
            // if (over == "over") {
            //     console.log("Game Over")
            //     break
            // }
            // else {
            //     continue
            // }
        }
        else if (playerSelection == paper && computerSelection == rock) {
            playerScore++
            console.log("Player wins.\n" + "Player: " + playerScore + "\nComputer: " + computerScore)
            
            // currentRound++
            // roundEngine();
            // if (over == "over") {
            //     console.log("Game Over")
            //     break
            // }
            // else {
            //     continue
            // }
        }
        else if (playerSelection == scissors && computerSelection == paper) {
            playerScore++
            console.log("Player wins.\n" + "Player: " + playerScore + "\nComputer: " + computerScore)
            // currentRound++
            // roundEngine();
            // if (over == "over") {
            //     console.log("Game Over")
            //     break
            // }
            // else {
            //     continue
            // }
        }
        else if (computerSelection == rock && playerSelection == scissors) {
            computerScore++
            console.log("Computer wins.\n" + "Player: " + playerScore + "\nComputer: " + computerScore)
            // currentRound++
            // roundEngine();
            // if (over == "over") {
            //     console.log("Game Over")
            //     break
            // }
            // else {
            //     continue
            // }
        }
        else if (computerSelection == paper && playerSelection == rock) {
            playerScore++
            console.log("Computer wins.\n" + "Player: " + playerScore + "\nComputer: " + computerScore)
            // currentRound++
            // roundEngine();
            // if (over == "over") {
            //     console.log("Game Over")
            //     break
            // }
            // else {
            //     continue
            // }
        }
        else if (computerSelection == scissors && playerSelection == paper) {
            playerScore++
            console.log("Computer wins.\n" + "Player: " + playerScore + "\nComputer: " + computerScore)
            // currentRound++
            // // roundEngine();
            // // if (over == "over") {
            // //     console.log("Game Over")
            // //     break
            // // }
            // // else {
            // //     continue
            // // }
        }
        else {
            console.log("Tie.\n" + "Player: " + playerScore + "\nComputer: " + computerScore)
            // currentRound++
            // roundEngine();
            // if (over == "over") {
            //     console.log("Game Over")
            //     break
            // }
            // else {
            //     continue
            // }
        }
        return;
    }
    
// }

// Plays the game in the round number prompted 
function playRound(rounds) {

    playerScore = 0;
    computerScore = 0;
        
    for (let i = 0; i < rounds ; i++ ) {
        playerChoice(); 
        computerSelection
        console.log("Round: " + (i+1))
        gameEngine();
        

    }

    return console.log("Game Over");
}


// // testing for pure randomness of elements
// console.log(computerPlay())

let rounds = window.prompt("How many rounds would you like to play? ")
playRound(rounds);

