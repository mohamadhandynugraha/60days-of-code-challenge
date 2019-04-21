let number = 190.72;
console.log(number.toFixed(1));
console.log(Math.sqrt(number).toFixed(2));
console.log(Math.round(number));
console.log(Math.floor(number));
console.log(Math.ceil(number));

let min = 10;
let max = 100;
let randomNumber = Math.floor(Math.random() * (max - min + 1));
console.log("random number = " + randomNumber);

// challenge area -> guessing game
// create function -> guess random number
let guessingGame = function (guessNumber) {
    let randomNum = Math.floor(Math.random() * 5 - 1 + 1);
    return randomNum === guessNumber;
};
console.log("**********************************");
console.log(guessingGame(1));
console.log(guessingGame(2));
console.log(guessingGame(3));
console.log(guessingGame(4));
console.log(guessingGame(5));