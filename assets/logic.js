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

let playerScore = 0;
let computerScore = 0;

// determine playerMove and handle event
let buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
    button.addEventListener('click', handleEvent)
})
function handleEvent (event) {
    if (event.target.id == 'scissors') {
        playerMove = 'scissors'
    }
    else if (event.target.id == 'rock') {
        playerMove = 'rock'
    }
    else if (event.target.id == 'paper') {
        playerMove = 'paper'
    }

    // get div to display result
    let displayResult = document.querySelector('#displayResult')

    // compare moves
    computerMove = getComputerChoice()
    let result = "";
    
    // when moves are the same the score doesnt increase or decrease, (optional)
    if (playerMove == computerMove) {

        playerScore += 0;
        computerScore += 0;
        result = `Player move was: ${playerMove} and Computer move
        was: ${computerMove}. The result is: A Tie! The score for
        player is ${playerScore} and for computer is ${computerScore}`
        displayResult.textContent = result
    }
    //  When playerMove = rock it checks whether computerMove = paper or scissors then runs according to computerMove!
    else if (playerMove == "rock"){

        if (computerMove == "paper") {
            computerScore += 1
            result = `Player move was: ${playerMove} and Computer move
            was: ${computerMove}. The result is: Computer wins! The score 
            for player is ${playerScore} and for computer is ${computerScore}`
            displayResult.textContent = result
        }

        else if (computerMove == "scissors") {

            playerScore += 1
            result = `Player move was: ${playerMove} and Computer
            move was: ${computerMove}. The result is: Player wins!
            The score for player is ${playerScore} and for computer
            is ${computerScore}`
            displayResult.textContent = result
        }
    }
// When playerMove = paper it checks whether computerMove = rock or scissors then runs according to computerMove!
    else if (playerMove == "paper"){

        if (computerMove == "rock") {
            playerScore += 1
            result = `Player move was: ${playerMove} and Computer move was: ${computerMove}. The result is: Player wins! The score for player is ${playerScore} and for computer is ${computerScore}`
            displayResult.textContent = result
        }
        else if (computerMove == "scissors") {
            computerScore+= 1
            result = `Player move was: ${playerMove} and Computer move was: ${computerMove}. The result is: Computer wins! The score for player is ${playerScore} and for computer is ${computerScore}`
            displayResult.textContent = result
        }
    }

    // When playerMove = scissors it checks whether computerMove = rock or paper then runs according to computerMove!
    else if (playerMove == "scissors"){

        if (computerMove == "rock") {
            computerScore += 1
        result = `Player move was: ${playerMove} and Computer move was: ${computerMove}. The result is: Computer wins! The score for player is ${playerScore} and for computer is ${computerScore}`
        displayResult.textContent = result
        }
        else if (computerMove == "paper") {
            playerScore += 1
            result = `Player move was: ${playerMove} and Computer move was: ${computerMove}. The result is: Player wins! The score for player is ${playerScore} and for computer is ${computerScore}`
            displayResult.textContent = result
        }
    }
    
    // declare winner
    if (playerScore >= 5) {
        displayResult.textContent = 'player wins'
        playerScore = 0
        computerScore = 0}
    else if (playerScore >= 5) {
        displayResult.textContent = 'computer wins'
        playerScore = 0
        computerScore = 0}
}



    
    



