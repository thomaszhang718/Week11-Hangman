//Creating a new constructor called CreateGame which picks a random answer from a list of Mario characters

var Word = function(wordPicked){
	//Set the randomized answer into the constructor, then split up the letters into an array
	this.word = wordPicked;
	this.answerLettersArray = this.word.split("");

	//Create an empty array where we'll push the letter's already guessed and a boolean for if the letter is picked already
	this.lettersGuessedArr = [];
	this.pickedAlready = false;

	//Array of possible letters for validation
	this.alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

	//This boolean is used to determine if the letter picked matches a letter in the answer
	this.isMatch = false;

	//This is our main function to check the letter picked against the letters in the answer
	this.checkLetters = function(letterPicked){

		//first check if the letter picked by the user has already been guessed. change boolean and return if it has
		if (this.lettersGuessedArr.indexOf(letterPicked) > -1) {
			this.pickedAlready = true;
			return; 
			
		} else {
			this.pickedAlready = false;

			//Loop through and check each letter in the answer array if it matches the letter picked
			for (i = 0; i < this.answerLettersArray.length; i++) {
	            if (this.answerLettersArray[i] === letterPicked) {
	        		//change the isMatch boolean to true
	        		this.isMatch = true;
	            }
	        }	
	        //push the letter guessed into our array
			this.lettersGuessedArr.push(letterPicked);
		}
	}

}

//Export the Word constructor
module.exports = Word;