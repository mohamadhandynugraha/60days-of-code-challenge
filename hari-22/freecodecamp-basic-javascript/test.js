function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin; // Change this line
}

// Change these values to test your function
let myRandom = randomRange(5, 15);
console.log(myRandom);