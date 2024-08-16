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

possibleOutcomes = 
    [{move: 'paper',
        win: 'rock',
        loss: 'scissors'
    }, 
    {move: 'scissors',
        win: 'paper',
        loss: 'rock'
    },
    {move: 'rock',
        win: 'scissors',
        loss: 'paper'
    }]


let playerMove=''// int
// getting playermove based on the id of the button clicked
let buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
button.addEventListener('click',(event) => {
    if (event.target.id == 'scissors') {
        playerMove = 'scissors'
    }
    else if (event.target.id == 'rock') {
        playerMove = 'rock'
    }
    else if (event.target.id == 'paper') {
        playerMove = 'paper'
    }
    playMatch(playerMove)
})
    
})
        
    


// Initialized outside function scope to avoid reseting each time
playerScore = 0;
computerScore = 0;

function playMatch(playerMove) {
    // init
    let result = ''
    let paragraph = document.createElement('p')
    const div = document.querySelector('#displayResult')
    const displayPlayerScore = document.querySelector('#playerScore')
    const displayComputerScore = document.querySelector('#computerScore')

    // loops until it finds playermove inside one of the objects
    for (let index = 0; index < possibleOutcomes.length; index++) {
        if (playerMove == getComputerChoice()) {  
            result ='Tie' /*When moves are the same*/
            div.textContent = result
            displayPlayerScore.textContent = `Player Score:${playerScore}`
            displayComputerScore.textContent = `Player Score:${computerScore}`
        }
        if (playerMove == possibleOutcomes[index].move) {
            if (getComputerChoice() == possibleOutcomes[index].win){
                result = 'Player wins'
                playerScore += 1
                div.textContent = result
                displayPlayerScore.textContent = `Player Score:${playerScore}`
                displayComputerScore.textContent = `Player Score:${computerScore}`

                
            }
            else if (getComputerChoice() == possibleOutcomes[index].loss) {
                result = 'Computer wins'
                computerScore +=1
                div.textContent = result
                displayComputerScore.textContent = `Player Score:${computerScore}`
                displayPlayerScore.textContent = `Player Score:${playerScore}`
            }
        }
    }
    
}






    
    



