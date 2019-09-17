function badGuess() {
  if ( isNaN( guess ) || guess < 1 || guess > 10 ) {
		console.log( `guess ${ guessNum } is ${	guess	} and is not 1-10 or is ${ typeof guess }`);
		guess = prompt( `Rules a little tough for ya, ${ userName }?
      Let's try that again. You have ${ 5 - guessNum } tries remaining
			Try a number between 1 and 10.` );
		break;
	}
}

function guessAgain() {
  if ( guesses.includes( guess ) ) {
		console.log( `guess ${ guessNum } is ${ guess } and function guessAgain ran`	);
		guess = prompt( `You already said ${ guess }, ${ userName }, try again. You have ${ 5 - guessNum } tries remaining.
			Enter a different number. (and seek help)` );
		break;
	}
}

function wrongGuess() {
  if ( guess != randomNum ) {
		console.log(	`guess ${ guessNum } was ${ guess } and was checked  against ${ randomNum } and is wrong.` );
    guess = prompt(	`Nope, not what I was thinking, try again. You have ${ 5 - guessNum } tries remaining. 
		Enter a different number.` );
	break;
	}
}

function youWon() {
  if ( guess == randomNum ) {
		console.log( `guess ${ guessNum } was ${ guess } and equalled randomNum` );
		alert( 'You Won!' );
	break;
	}
}

function guessWhat () {
	console.log ('guessWhat ran');
}