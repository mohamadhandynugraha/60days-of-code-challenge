// multiple arguments
let add = function(a, b, c){
    return a + b + c
}

let result = add(10, -11, 10)
console.log(result)

// default arguments
let getScoreText = function (playerName = "Anonymous", playerScore = 0){
    return "Name: " + playerName + " - Score: " + playerScore
}

getScoreText()
let score = getScoreText("Handy", 10)
console.log(score)

let scoreText = getScoreText()
console.log(scoreText)

console.log(getScoreText(null, 120))

let anotherScoreText = getScoreText
console.log(anotherScoreText)

console.log(getScoreText)

// challenge area
// total, tipPercent. tipPercent default value = .10

let restaurantTip = function (total, tipPercent = .10){
    tip = total * tipPercent
    totalBill = total + tip;
    return "Your bill = $" + total + " and the tip = $" + tip + "\nThe total bill is = $"
     + totalBill
}

let padangTip = restaurantTip(100, .30);
console.log(padangTip)

console.log(restaurantTip(50))
console.log(restaurantTip(40, .25))