// alert("You have 10 guesses. Guess 1-10");

var number = 3;
answer = prompt("Guess a number");


for( i = 0; i < 10; i++ ) {


if (answer == number) {
console.log("right!");
alert("You guessed correctly!");
break;
}
else {
answer = prompt("Please try again");

}

}
