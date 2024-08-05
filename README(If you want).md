Hi I have started using readme files as a way to document what I am doing, 
so that in the future I can see how dumb my logic was.

Ok so I have my index.html contains my webpage. Then I have created my assets folder which contains things that will be relevan to the webpage such as my style.css and logic.js(at the moment my favourite).

First version I want to create is going to be played in the console. I will provide input which is my move out of 3 possible moves using the prompt function then get the computer to select a random move from the three moves. After getting these moves I compare using maybe a function. That function will take in two arguements my move and the computers. Ultimately I am comparing between 3 moves. Therefore the function must contain 3 conditions that will check if the moves are similar or different. If not similar then which 1 wins and which 1 loses. Then display the result. Seems easy to make. (Everything after this line is updates during or after finishing the project)

Status:
I am currently thinking of how to effectively check who wins and who loses.
The first one I dealt with is the draw, which i just check if playerMove and computerMove are the same.
Now, check if playermove = for example rock and computerMove = scissors player wins, playerScore += 1. Tested and it works so I will do the same logic for scissors and paper. One problem is that the score resets after each game