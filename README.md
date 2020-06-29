# Tic Tac Toe Client Application

This is a Tic-Tac-Toe game where a user can sign-up, sign-in/sign-out. The Objective of the game is to get three in a row of either X's and O's. It is played on a 3x3 game board.

# Technologies Used
- HTML
- CSS
- bootstrap
- JQUERY
- JSON
- ajax
- Bash

# Developement Process

The first step was to have this application allow for users to sign-up, sign-in, and sign-out. The change password function would only appear once signed in. After I completed the user authorization, I created a 3x3 gameboard that responded to clicks and having X's and O's alternate. However, I struggled to understand how I could store the clicks/moves in the application. After understand the game-api, I was able to store X's and O's into the array and also develop winning combinations by letting the application know which filled indices will end the game and determine the winner.

# Future Iterations

As of now, users would have to sign-out and sign-in again to access a cleared game-board. In the future, I would like to be able to have the play-game button reset the game board as well. Also, despite the application being able to determine a winner, it does not show a tie. In the future I would like to fix the game so that a tie would appear once the gameboard is filled. I would also like to have users be able to see the number of games that have been played by the user.

# Wireframes
https://drive.google.com/file/d/1xKsN3YWNwA68-BzvZuSZxNVud84CpDr7/view?usp=sharing
https://drive.google.com/file/d/191sv3uRlujzJ--bXBsSj45F7-AfiiObH/view?usp=sharing

# User Stories
- As a user, I want to be able to register an account
- As a user, I want to be able to see who won or lost
- As a user, I want to see the number of games I have played
- As a user, I want to see how many time X's or O's have won in a user's account
