

let rpsOptions = ["Rock", "Paper", "Scissors"]


// const playerSelection = "Scissors"
//const computerSelection = computerPlay()
// const playerSelectionReal = playerSelection[0].toUpperCase() + playerSelection.substring(1).toLowerCase()





function computerPlay() {
    return rpsOptions[Math.floor(Math.random() * rpsOptions.length)];

}




function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 2
    } 
      else if (playerSelection == "Rock" && computerSelection == "Scissors") {
          return 1
      }

      else if (playerSelection == "Rock" && computerSelection == "Paper") {
          return 0
      }


      else if (playerSelection == "Paper" && computerSelection == "Rock") {
          return 1
      }

      else if (playerSelection == "Paper" && computerSelection == "Scissors") {
          return 0
      }

      else if (playerSelection == "Scissors" && computerSelection == "Paper") {
          return 1
      }

      else if (playerSelection == "Scissors" && computerSelection == "Rock") {
          return 0
      }

}

let playerScore = 0
let computerScore = 0

 function game(playerSelection) {
    let run = true;

    while (run) {
        result.textContent = "";
        if (playerSelection == null) {
            run = false;
            break;
        }
        let playerSelectionReal = playerSelection[0].toUpperCase() + playerSelection.substring(1).toLowerCase()
        let computerSelection = computerPlay()
        let round = playRound(playerSelectionReal, computerSelection)

        if (round == 1) {
            playerScore += 1
            //console.log("You win!");
            result.textContent += "You win!\r\n";
        }

        else if (round == 0) {
            computerScore += 1
            // console.log("You lose!");
            result.textContent += "You lose!\r\n";
        }


        else {
            // console.log("Draw!");
            result.textContent += "Draw!\r\n";
        }

        run = false; 

    }

    result.textContent += `Overall Score: ${playerScore} to ${computerScore}`
 }

    /* 

    if (playerScore > computerScore) {
        // console.log("You won! Overall Score: ", playerScore, "to", computerScore);
        result.textContent += `You won! Overall Score: ${playerScore} to ${computerScore}`;
    }

    else if (playerScore < computerScore) {
        // console.log("You lost! Overall Score: ", playerScore, "to", computerScore);
        result.textContent += `You lost! Overall Score: ${playerScore} to ${computerScore}`;
    }

    else {
        // console.log("Draw Game! Overall Score: ", playerScore, "to", computerScore);
        result.textContent += `Draw Game! Overall Score: ${playerScore} to ${computerScore}`;
    }
}
    */






const buttons = document.querySelectorAll("button");

buttons.forEach(button => button.addEventListener("click", () => {
    game(button.id)

}))



const parent = document.querySelector("#realcontainer")
const result = document.createElement("div");
// result.textContent = "Hello Therffe";


result.setAttribute("style", "width: 650px; height: 150px; text-align: center; white-space: pre;")

parent.setAttribute("style", "align-items: center; gap: 110px; margin-top: 150px")

parent.appendChild(result)

