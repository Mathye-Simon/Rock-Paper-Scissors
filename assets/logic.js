// generate a random number then use to determine computer move/choice
function getComputerChoice () {
    let randomNumber = Math.random()
    let computerMove = '';
    // this function creates a random number and then creates a move for the computer based on that- 
    // -random number. 3 Moves in total
    if(randomNumber <= 0.33){
        computerMove = 'Paper'
        return computerMove
    }
    else if (randomNumber >0.33 && randomNumber <= 0.66) {
        computerMove = 'Rock'
        return computerMove}
    else if (randomNumber > 0.66) {
        computerMove = 'Scissors'
        return computerMove
    }
}

possibleOutcomes = 
    [{move: 'Paper',
        win: 'Rock',
        loss: 'Scissors'
    }, 
    {move: 'Scissors',
        win: 'Paper',
        loss: 'Rock'
    },
    {move: 'Rock',
        win: 'Scissors',
        loss: 'Paper'
    }]


let playerMove=''// int
// getting playermove based on the id of the button clicked
let buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
button.addEventListener('click',(event) => {
    if (event.target.id == 'Scissors') {
        playerMove = 'Scissors'
    }
    else if (event.target.id == 'Rock') {
        playerMove = 'Rock'
    }
    else if (event.target.id == 'Paper') {
        playerMove = 'Paper'
    }
    let computerMove = getComputerChoice()
    playMatch(playerMove,computerMove)
})
    
})
        
    


// Initialized outside function scope to avoid reseting each time
playerScore = 0;
computerScore = 0;

function playMatch(playerMove, computerMove) {
    // init
    let result = ''
    let paragraph = document.createElement('p')
    const div = document.querySelector('#displayResult')
    const displayPlayerScore = document.querySelector('#playerScore')
    const displayComputerScore = document.querySelector('#computerScore')
  
    // loops until it finds playermove inside one of the objects
    for (let index = 0; index < possibleOutcomes.length; index++) {
        if (playerMove == computerMove) {  
            result = `Result: ${playerMove} and ${computerMove}. Its a tie!` /*When moves are the same*/
            div.textContent = result
            displayPlayerScore.textContent = `Player Score:${playerScore}`
            displayComputerScore.textContent = `Computer Score:${computerScore}`
        }
        if (playerMove == possibleOutcomes[index].move) {
            if (computerMove == possibleOutcomes[index].win){
                result = `Result: ${playerMove} beats ${computerMove}. You win :)`
                playerScore += 1
                div.textContent = result
                displayPlayerScore.textContent = `Player Score:${playerScore}`
                displayComputerScore.textContent = `Computer Score:${computerScore}`

                
            }
            else if (computerMove == possibleOutcomes[index].loss) {
                result = `Result: ${playerMove} does not beat ${computerMove}. You lose :(`
                computerScore +=1
                div.textContent = result
                displayComputerScore.textContent = `Computer Score:${computerScore}`
                displayPlayerScore.textContent = `Player Score:${playerScore}`
            }


        }


            // who wins
            if (playerScore >= 5) {
                console.log('player wins')
                playerScore = 0
                computerScore = 0
                alert('Game set!! You Win! Awesome')
            }

            if (computerScore >= 5) {
                console.log('Computer wins')
                playerScore = 0
                computerScore = 0
                alert('Game set!! Computer Wins! You..lose..')
            }
    }
    
}






    
    



