//Creating a new constructor called CreateGame which picks a random answer from a list of Mario characters

var Letter = function(wordPicked){
	//Set the randomized answer into the constructor, then split up the letters into an array
	this.word = wordPicked;
	this.answerLettersArray = this.word.split("");

	//Create an empty array which will hold either the _ or the letter's we've guessed correctly
	this.currentGuessesArray = [];
	this.cgaString = ""; //this will hold the above array as a string

	//This function adds the correct number of _'s to the array, then converts it to a string with spaces inbetween each underscore
	this.createSpaces = function(){

	    for (i = 0; i < this.answerLettersArray.length; i++) {
	        this.currentGuessesArray.push("_");
	    }
		this.cgaString = "";

		for (i = 0; i < this.currentGuessesArray.length; i++) {
	    	this.cgaString = this.cgaString + this.currentGuessesArray[i] + " ";
    	}

	    return this.cgaString;
	};

	//This function only displays what's in the currentGuessesArray which is usually a mixture of the underscores and correctly guessed letters
	this.displaySpaces = function() {
		this.cgaString = "";
		for (i = 0; i < this.currentGuessesArray.length; i++) {
	    	this.cgaString = this.cgaString + this.currentGuessesArray[i] + " ";
    	}

	    return this.cgaString;
	};

	//This function checks to see if the letter picked by the user matches any of the letters in the answer
    this.checkSpaces = function(letterPicked) {

    	//clear out the cgaString which is rebuilt every check
    	this.cgaString = "";

    	//Loop through every letter of the answerLettersArray and if the picked letter matches, then replace the _ with the picked letter
    	for (i = 0; i < this.answerLettersArray.length; i++) {
    		if(this.answerLettersArray[i] === letterPicked) {
    			this.currentGuessesArray[i] = letterPicked;
    		}
		}

		//Rebuild the string of _'s and letters for display
	    for (i = 0; i < this.currentGuessesArray.length; i++) {
	    	this.cgaString = this.cgaString + this.currentGuessesArray[i] + " ";
    	}

    	return this.cgaString;
    };

    //This function checks for our win condition when the currentGuessesArray matches the answerLettersArray
    this.checkWin = function() {
    	//I had to convert the 2 arrays to a string to check if they matched
    	var cgaWord = this.currentGuessesArray.toString();
    	var alaWord = this.answerLettersArray.toString();

    	//Return true if they match
    	if (cgaWord === alaWord) {
    		return true;
    	}
    }
}

//Export the Letter constructor
module.exports = Letter;0.