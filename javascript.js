

let rpsOptions = ["Rock", "Paper", "Scissors"]



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
            result.textContent += "You win!\r\n";
        }

        else if (round == 0) {
            computerScore += 1
            result.textContent += "You lose!\r\n";
        }


        else {
            result.textContent += "Draw Game!\r\n";
        }

        run = false; 


    result.textContent += `Overall Score: ${playerScore} to ${computerScore}`

    if (playerScore == 5) {
        result.textContent = `Congratulations! You've won with a score of ${playerScore} to ${computerScore}.`;
        createRematch();
        break;
        
    }
      else if (computerScore == 5) {
          result.textContent = `Game over! You've lost with a score of ${playerScore} to ${computerScore}.`;
          createRematch();
          break;
      }
   }

 }



const buttons = document.querySelectorAll("button");


buttons.forEach(button => button.addEventListener("click", () => {

    button.classList.add("playing");


    if (playerScore < 5 && computerScore < 5) {
    game(button.id) }

      else if (result.textContent.split(" ")[result.textContent.split(" ").length-1] != "game.") {
          result.textContent += `\r\nPlease click "Rematch" to start a new game.`

      }

}))



const parent = document.querySelector("#realcontainer")
const result = document.createElement("div");

result.setAttribute("style", "color: white; width: 650px; height: 150px; text-align: center; white-space: pre; font-weight: 500; font-size: 22px;")

parent.setAttribute("style", "align-items: center; gap: 110px; margin-top: 150px")

parent.appendChild(result)



function createRematch() {
    const rematch = document.createElement("button");
    rematch.textContent = "Rematch";
    rematch.classList.add("pressRematch");
    parent.appendChild(rematch)
    rematch.addEventListener("click", () =>  {

        playerScore = 0;
        computerScore = 0;
        result.textContent = "";
        parent.removeChild(rematch);

  })


}


buttons.forEach(button => button.addEventListener("transitionend", removeTransition));



function removeTransition(e) {
    if (e.propertyName == "transform") return;

    this.classList.remove("playing");
}