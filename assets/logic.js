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

console.log(getComputerChoice())