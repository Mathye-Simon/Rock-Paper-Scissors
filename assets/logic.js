// generate a random number then use to determine computer move/choice
function getComputerChoice () {
    let randomNumber = Math.random()
    let computerMove = '';
    // this function creates a random number and then creates a move for the computer based on that- 
    // -random number. 3 Moves in total
    if(randomNumber <= 0.33){
        computerMove = 'paper'
        return computerMove
    }
    else if (randomNumber >0.33 && randomNumber <= 0.66) {
        computerMove = 'rock'
        return computerMove}
    else if (randomNumber > 0.66) {
        computerMove = 'scissors'
        return computerMove
    }
}



// function promts user for input, that input becomes playermove
function getHumanChoice (){
    let input = prompt("What will be your move player?:  ")
    let playerMove = input
    return playerMove
}



// decision of who wins and who loses
function countScore (playerMove, computerMove) {
    let playerScore = 0;
    let computerScore = 0;

    let result = "";
    // when moves are the same the score doesnt increase or decrease, (optional)
    if (playerMove == computerMove) {
        playerScore += 0;
        computerScore += 0;
        result = `Player move was: ${playerMove} and Computer move was: ${computerMove}. The result is: A Tie! The score for player is ${playerScore} and for computer is ${computerScore}`
    }
    // what happens when playerMove is = rock
    else if (playerMove == "rock" && computerMove == "paper") {
        computerScore += 1
        result = `Player move was: ${playerMove} and Computer move was: ${computerMove}. The result is: computer wins! The score for player is ${playerScore} and for computer is ${computerScore}`
        }

    else if (playerMove == "rock" && computerMove == "scissors") {
            playerScore += 1
            result = `Player move was: ${playerMove} and Computer move was: ${computerMove}. The result is: Player wins! The score for player is ${playerScore} and for computer is ${computerScore}`
        }
    return result
    }
console.log(countScore(getHumanChoice(),getComputerChoice()))
    //     else if (playerMove === "rock" && computerMove === "") {
    //         playerMove += 1
    //     }
    //     else if (playerMove === "") {}
    // }
