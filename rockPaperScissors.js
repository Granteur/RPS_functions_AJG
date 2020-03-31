/*Define a hands array with the values 'rock', 'paper', and 'scissors'*/
var userHand = prompt("Type rock, paper, or scissors.");
/*Define a function called getHand() that returns a hand from the array using parseInt(Math.random()*10)%3*/
	let compChoice=Math.random();
if (compChoice <= .33){
	compChoice = "rock";
} else if (compChoice <= .66) {
	compChoice = "paper";
} else {
	compChoice = "scissors";
}
	var tie = 0;
	var win = 0;
	var lose = 0;

/*Gets hands from each*/
let shoot = function(userHand, compChoice){
	if (userHand == compChoice){
		console.log("Tie Game");
		tie++;
	} else if ((userHand == "paper")&&(compChoice == "rock")){
		win++;
		console.log("You chose " + userHand + " the computer chose " + compChoice + " WINNER!");
	} else if ((userHand == "rock")&&(compChoice == "scissors")){
		win++;
		console.log("You chose " + userHand + " the computer chose " + compChoice + " WINNER!");
	} else if ((userHand == "scissors")&&(compChoice == "paper")){
		win++;
		console.log("You chose " + userHand + " the computer chose " + compChoice + " WINNER!");
	} else {
		console.log("You chose " + userHand + " the computer chose " + compChoice + " LOSER!");
		lose++;
	}
}
console.log(shoot());
alert(console.log(shoot(userHand,compChoice)));

/*Determines the winner
Logs the hands played and name of the winner.
If its a tie, log the hands played and "it's a tie".
Returns the winner object (null if no winner)
Define a function called playGame() that takes arguments player1, player2, and playUntil.
Play rounds until one of the players wins playUntil hands
When one player has won enough games, return the winning player object
Play a game to 5 wins*/