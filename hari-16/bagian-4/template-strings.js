// regular strings
console.log("Handy")
console.log('Handy')

// template strings pake curly braces ${}
let name = "Handy"
let age = "23"
let stringName = `Hey, my name is ${name}! and i am ${age} years old`
console.log(stringName)

let squareRoot = function (number){
    return `Square root of ${number} is ${Math.sqrt(number)}`
}

let myNumber = 4
console.log(squareRoot(myNumber))

// challenge area using template string
// return -> a 25% tip on $40 would be $10

let getTip = function (bill, tipPercent = .10){
    return `a ${tipPercent * 100}% tip on $${bill} would be $${bill * tipPercent}`
}

let calculateTip = getTip(40, .25)
console.log(calculateTip)

calculateTip = getTip(100, .10)
console.log(calculateTip)

calculateTip = getTip(100, .30)
console.log(calculateTip)