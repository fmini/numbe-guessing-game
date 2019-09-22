//create variables
const randomNum = Math.floor( Math.random() * 10 + 1 );
let guess = 0;
let guessNum = 0;
const guesses = [];
const userName = 'NoName';

console.log( randomNum );

// ask user for their name and first guess
//userName = prompt( 'What is your name?' );
alert( `OK, ${ userName }, let's play a game. You will have 5 guesses. Ready?` );

do {
	if ( guessNum == 0 ) {
		guess = prompt( `What is your first guess, ${ userName }?` );
		console.log( guessNum );
		guesses[ guessNum ] = guess;
	}

	// Check if guess is between 1 and 10
	else if ( isNaN( guess ) || guess < 1 || guess > 10 ) {
		console.log(
			`guess ${ guessNum } is ${
				parseInt.guess
			} and is ${ typeof guess } or not 1-10`
		);
		guess = prompt( `Rules a little tough for you, ${ userName }?
      Let's try that again. You have ${ 5 - guessNum } tries remaining
			Try a number between 1 and 10.` );
		guesses[ guessNum ] = guess;
	}

	// Check if number was already guessed
	else if ( guesses.slice( 0, -1 ).includes( guess ) && guessNum != 1 ) {
		console.log(
			`guess ${ guessNum } is ${ guess } and already guessed that number ran`
		);
		guess = prompt( `You already said ${ guess }, ${ userName }, try again. You have ${ 5 -
      guessNum } tries remaining.
			Enter a different number. ${ guesses }` );
		guesses[ guessNum ] = guess;
	}

	// Check if guess is correct
	else if ( guess != randomNum ) {
		console.log(
			`guess ${ guessNum } was ${ guess } and was checked  against ${ randomNum } and is wrong.`
		);

		guess = prompt(
			`Nope, not what I was thinking, try again. You have ${ 5 -
        guessNum } tries remaining. Enter a different number.`
		);
		guesses[ guessNum ] = guess;
	}

	// Alert that they guessed correctly
	else if ( guess == randomNum ) {
		console.log( `guess ${ guessNum } was ${ guess } and equalled randomNum` );
		alert( 'You Won!' );
		break;
	}

	// Let them know they lost
	else {
		alert( 'Not so good at this are you?' );
	}

	console.log( `guess number ${ guessNum }` );
	guessNum++;
} while ( guessNum < 5 );

console.log( `final guess was ${ guess }` );

if ( guess == randomNum ) {
	console.log( `guess ${ guessNum } was ${ guess } and equalled randomNum` );
	alert( 'You Won!' );
} else {
	alert( 'Not very good at this are you?' );
}
