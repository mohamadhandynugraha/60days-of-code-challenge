// function - input (argument), code (process), output (result)

var greet = function () {
    console.log("Hi, User!")
}

greet()
greet()
greet()

let square = function(num){
    return num * num
}

console.log(square(10))
console.log(square(3))

// challenge area
// function convert fahrenheit to celcius

let convertFahrenheitToCelcius = function(fahrenheit){
    return fahrenheit + " fahrenheit deg = " + (fahrenheit - 32) * 5 / 9 + " celcius deg"
}

console.log(convertFahrenheitToCelcius(50))
console.log(convertFahrenheitToCelcius(32))
console.log(convertFahrenheitToCelcius(68))

let tempPhilla = convertFahrenheitToCelcius(30)
console.log(tempPhilla)

// kalau kodingan di bawah di run, maka argument fahrenheit itu menjadi undefined sedangkan celciusnya
// menjadi NaN
console.log(convertFahrenheitToCelcius())