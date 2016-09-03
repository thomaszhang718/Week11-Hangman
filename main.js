//require the inquirer package
var inquirer = require('inquirer');

//require the three constructors from our other files
var CreateGame = require('./game.js');
var Letter = require('./letter.js');
var Word = require('./word.js');

//create our main function
var mainFunc = function() {

	//Set our number of guesses
	var numberOfGuessesLeft = 12;

	//Use our CreateGame constructor and set the randomized answer to a variable
	var newGame = new CreateGame();
	var gameAnswer = newGame.answer;

	//Use our Letter and Word constructors and pass in the variable for our answer
	var wordConstr = new Word(gameAnswer);
	var letterConstr = new Letter(gameAnswer);

	//create the game function
	var gameFunc = function() {

		//if statement to check if we still have guesses
		if (numberOfGuessesLeft > 0) {

			//display the number of guesses remaining to user
			console.log("Number of Guesses Remaining: " + numberOfGuessesLeft);

			//quick if else statement to run the createSpaces function only on the first run
			if(numberOfGuessesLeft == 12) {
				console.log(letterConstr.createSpaces());
			}
			else {
				//this else statement shows the string with the mixture of _'s and letters
				console.log(letterConstr.displaySpaces());
			}

			//Display the letter's guessed
			console.log("Letter's Guessed: " + wordConstr.lettersGuessedArr);

			//Ask the user which letter they want to pick
			inquirer.prompt([{
		        name: "letter",
		        message: "Please pick a letter to guess"
		    }]).then(function(answers) {
		    	//store their pick as a variable
		    	var letterGuessed = answers.letter

		    	//pass the letter picked into our checkLetters function which will look for a match
				wordConstr.checkLetters(letterGuessed);

				//This if statement runs if the letter is already picked, so we don't decrease the number of guesses
				if (wordConstr.pickedAlready) {
					numberOfGuessesLeft++;
				}

				//If the letter picked is a match
				if (wordConstr.isMatch) {

					//This replaces the _ with the letter picked, but doesn't redisplay it yet
					letterConstr.checkSpaces(letterGuessed);

					//Check the win condition. If we've won, let the user know they won, display the answer, then exit the app
					if (letterConstr.checkWin()) {
						console.log("You have won the game!");
						console.log("The answer was " + gameAnswer);
						return;
					}

					//If no win, decrement the guesses and then run the gameFunc again
					numberOfGuessesLeft--;
					gameFunc();
				}

				else {
					//This replaces the _ with the letter picked, but doesn't redisplay it yet
					letterConstr.checkSpaces(letterGuessed);
					
					//Decrement the guesses and then run the gameFunc again
					numberOfGuessesLeft--;
					gameFunc();
				}
			});
		}

		//No guesses remaining. Let the user know, print the correct answer, then exit the app
		else {
			console.log("you are out of guesses");
			console.log("The answer was " + gameAnswer);
			return;
		}
	}
	//call the game function
	gameFunc();
}
//call the main function
mainFunc();










