//Creating a new constructor called CreateGame which picks a random answer from a list of Mario characters

var CreateGame = function(){
	//Array of possible answers and a randomiser to pick a word from that array
	this.possibleAnswers = ["boo", "bowser", "daisy", "donkeykong", "luigi", "mario", "peach", "toad", "waluigi", "wario", "yoshi"];
	this.answer = this.possibleAnswers[Math.floor(Math.random()*this.possibleAnswers.length)];
};

//Export the CreateGame constructor
module.exports = CreateGame;