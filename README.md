# Tic-Tac-Toe : Mod 1 Final Project
## Overview
This repository holds everything you need to play your own Harry-Potter themed version of tic-tac-toe. Play against yourself or with a friend and let the app keep score! All files included were written completely from scratch and attempt to complete the following goals:

  - Demonstrating a knowledge of DRY vanilla JavaScript, using local storage to persist data, and using event delegation.
  - Separation of altering the data model and manipulating the DOM.
  - Iterating through DOM elements using for loops.

## Who
This version of Tic-Tac-Toe was completed by me, Cole Fiscus (he/him), a student in Module 1 at the [Turing School of Software and Design](https://turing.io/), based in Denver, CO. Additional support was provided by my mentor, Patrick McLaughlin, and my Turing 'Rock', Bailey Dunning.

## How
Technologies used for this project include vanilla JavaScript, HTML, and CSS. Planning was done using GitHub Projects.

## Where
#### Install Instructions
  - Clone down this repository using the Terminal (`git clone`)
  - `cd` into that local repo
  - enter `open index.html`; you should now be able to play your first game.
  
Although not available to view now, future access to the webpage will be available --> HERE <--.

## What
As mentioned previously, the files included will allow you, or a user, to play Tic-Tac-Toe. The files included are as follows:

  - `html.index` & `style.css` - create and control the structure and styling for the app.
  - `main.js` - handles all DOM manipulation; starts a game when the page loads, accesses the data model to check for a win/draw after every turn and adjusts the DOM depending on the output, and resets the DOM to it's initial state after a game has completed.
  - `player.js` - holds the Player class; the state for a player object includes an id, a token, the number of points, and a `myTurn` property that is assigned to a Boolean value. Also included are two methods that either save a player's points to local storage or retrieve points that may be in local storage.
  - `game.js` - holds the Game class; this is where the data model is located and altered based on a user's input. The state of a Game object includes two Player instances and Game "board" to track a game being played. A few important methods are `returnResults()`, which is called by `main.js` to recieve the necessary output to manipulate the DOM accordingly, `checkForWinner()` and `checkForDraw()`, which both check the data model to validate either a win or a draw result after a user takes their turn, and `startNewGame()`, which effectivley resets the data model while also retrieving saved user points so that a new game can be played.
  
#### Notable Features
  - When a user wins a match, 100 points is automatically added to their score.
  - When a game end in a win or a draw, a prompt is displayed on the screen and shortly after a countdown is displayed to indicate that the next game is starting.
  - When a user is deciding where to place their token, all *available* spots will have a light blue overlay displayed over the grid space when the user hovers their cursor on it.
  
## HOW (to play)


## Wins/Challenges
#### Wins
The game seems to run smoothly without any bugs. I am happy with multiple functions, including the functions that create the countdown and add the hover feature.

From where I initially began, I thought the major refactoring I did went well - I moved a lot of logic that was happening inside of `main.js` into `game.js` where all data model changes should be made. 

I am a fan of the styling and like the way the final product appears; I think the user experience is enjoyable. 

I think the fact that there are only five total global variables including query selectors is a win, and I only am only using two event listeners, including `onload` which I think signifies effective event delegation.

#### Challenges
CSS was difficult to navigate and took longer that I would have liked, but I think it ended looking good and the code I think is DRY.

I struggled with how to effectively validate a win or a draw. The switch statement I ended up using gets the job done, but there is likely a more efficient way. I just haven't found it yet.

Perhaps the biggest challenge was getting the timing of the functions down. When a user takes their turn there is a lot happening and it took some trial and error and some debugging using the Dev Tools to get things operating correctly.

I think if I were to do this project over again, I would find another way to create the grid - according to WAVE a layout table can be more difficult to navigate for individuals using a screen reader.

## Final Thoughts / The Future
I mostly had fun working on this project! I have come a long way in the past 5.5 weeks or so. Some parts of the project were frustrating, such as getting CSS to do what I wanted, and some parts were very rewarding, like creating the bonus features of the countdown and the hover state. I think if given more time, some other features I would try to implement include allowing a user to select which Hogwarts House they want to be - which would require a "set-up screen" to choose a house (includes a token and color scheme), some kind of streak counter displayed alongside a player's score that could give a player certain trophies after a certain number of wins in a row, and light/dark mode option.
