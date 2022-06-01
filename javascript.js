let rpsOptions = ["Rock", "Paper", "Scissors"]
// const playerSelection = "Scissors"
//const computerSelection = computerPlay()
// const playerSelectionReal = playerSelection[0].toUpperCase() + playerSelection.substring(1).toLowerCase()



function computerPlay() {
    return rpsOptions[Math.floor(Math.random() * rpsOptions.length)];

}




function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        // console.log("DRAW GAME!");
        return 2
    } 
      else if (playerSelection == "Rock" && computerSelection == "Scissors") {
          // console.log("You win! Rock beats Scissors");
          return 1
      }

      else if (playerSelection == "Rock" && computerSelection == "Paper") {
          // console.log("You lose! Paper beats Rock");
          return 0
      }


      else if (playerSelection == "Paper" && computerSelection == "Rock") {
          // console.log("You win! Paper beats Rock");
          return 1
      }

      else if (playerSelection == "Paper" && computerSelection == "Scissors") {
          // console.log("You lose! Scissors beats Paper");
          return 0
      }

      else if (playerSelection == "Scissors" && computerSelection == "Paper") {
          // console.log("You win! Scissors beats Paper");
          return 1
      }

      else if (playerSelection == "Scissors" && computerSelection == "Rock") {
          // console.log("You lose! Rock beats Scissors");
          return 0
      }

}


function game() {
    let playerScore = 0
    let computerScore = 0

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Please choose either 'Rock', 'Paper' or 'Scissors' : ")
        if (playerSelection == null) {
            break
        }
        let playerSelectionReal = playerSelection[0].toUpperCase() + playerSelection.substring(1).toLowerCase()
        let computerSelection = computerPlay()
        let round = playRound(playerSelectionReal, computerSelection)

        if (round == 1) {
            playerScore += 1
            console.log("You win!");
        }

        else if (round == 0) {
            computerScore += 1
            console.log("You lose!");
        }


        else {
            console.log("Draw!");
        }

    }

    if (playerScore > computerScore) {
        console.log("You won! Overall Score: ", playerScore, "to", computerScore);
    }

    else if (playerScore < computerScore) {
        console.log("You lost! Overall Score: ", playerScore, "to", computerScore);
    }

    else {
        console.log("Draw Game! Overall Score: ", playerScore, "to", computerScore);
    }
}


game()







//console.log(playerSelectionReal, computerSelection);
//console.log(playRound(playerSelectionReal, computerSelection))


