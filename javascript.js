let rpsOptions = ["Rock", "Paper", "Scissors"]



function computerPlay() {
    return rpsOptions[Math.floor(Math.random() * rpsOptions.length)];

}






console.log(computerPlay());
