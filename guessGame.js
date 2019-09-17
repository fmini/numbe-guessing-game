// set up variables
const guesses = [];
const randomNum = Math.floor( Math.random * 10 + 1 );
let userName = 'George McFly';
let guess;
let guessNum = 1;

//Greet and get name
userName = prompt( 'Good day, what shall we call you?' );
alert( `Awesome ${ userName }, let's play a game.
I am thinking of a number between 1 and 10,
You have 5 chances to guess. Ready?` );

// Check randomNum ** delete when complete
console.log( randomNum );

// Begin checks
while ( guessNum <= 5 ) {
	if ( ( guessNum = 1 ) ) {
		guess = prompt( `What is your first guess, ${ userName }?` );
	}

	//function badGuess() {
	else if ( isNaN( guess ) || guess < 1 || guess > 10 ) {
		console.log(
			`guess ${ guessNum } is ${ guess } and is not 1-10 or is ${ typeof guess }`
		);
		guess = prompt( `Rules a little tough for ya, ${ userName }?
      Let's try that again. You have ${ 5 - guessNum } tries remaining
      Try a number between 1 and 10.` );
		guessNum++;
		guesses.push( guess );
	}

	//function guessAgain() {
	else if ( guesses.includes( guess ) ) {
		console.log( `guess ${ guessNum } is ${ guess } and function guessAgain ran` );
		guess = prompt( `You already said ${ guess }, ${ userName }, try again. You have ${ 5 -
      guessNum } tries remaining.
      Enter a different number. (and seek help)` );
		guessNum++;
		guesses.push( guess );
	}
	//}

	//function wrongGuess() {
	else if ( guess != randomNum ) {
		console.log(
			`guess ${ guessNum } was ${ guess } and was checked  against ${ randomNum } and is wrong.`
		);
		guess = prompt( `Nope, not what I was thinking, try again. You have ${ 5 -
      guessNum } tries remaining. 
    Enter a different number.` );
		guessNum++;
		guesses.push( guess );
	}
	//}

	//function youWon() {
	else if ( guess == randomNum ) {
		console.log( `guess ${ guessNum } was ${ guess } and equalled randomNum` );
		alert( 'You Won!' );
	}
	guessNum++;
	guesses.push( guess );
	//}
}
