Hi I have started using readme files as a way to document what I am doing, 
so that in the future I can see how dumb my logic was.

Ok so I have my index.html contains my webpage. Then I have created my assets folder which contains things that will be relevan to the webpage such as my style.css and logic.js(at the moment my favourite).

First version I want to create is going to be played in the console. I will provide input which is my move out of 3 possible moves using the prompt function then get the computer to select a random move from the three moves. After getting these moves I compare using maybe a function. That function will take in two arguements my move and the computers. Ultimately I am comparing between 3 moves. Therefore the function must contain 3 conditions that will check if the moves are similar or different. If not similar then which 1 wins and which 1 loses. Then display the result. Seems easy to make. (Everything after this line is updates during or after finishing the project)

Status:
I am currently thinking of how to effectively check who wins and who loses.
The first one I dealt with is the draw, which i just check if playerMove and computerMove are the same.
Now, check if playermove = for example rock and computerMove = scissors player wins, playerScore += 1. Tested and it works so I will do the same logic for scissors and paper. One problem is that the score resets after each game. 

Polished the code and added logic for other options. Turns out I dont even have to compare computerMove and playerMove! I figured that since I already know that when playerMove = for eg paper then if computerMove = eg scissors then computer wins. So I didnt have to compare I just use that concept for other moves as well!

Ok now a simple fix for the fact that it resets score after each game, currently it would be to create a loop for a fixed amount of games 5 times. Because the loop wont refresh the page we will still have our score! So for i = 0; i <= 5; i++; altenatively (in python i would use while i <= 5: i+=1).
so while i is less than or = 5 i want it to loop the game each time displaying the result and asking for input. Sounds fun!