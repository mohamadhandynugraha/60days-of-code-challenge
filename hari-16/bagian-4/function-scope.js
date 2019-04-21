// global scope (convertFahrenheitToCelcius, tempPhilla)
    // local scope (fahrenheit)
let convertFahrenheitToCelcius = function(fahrenheit){
    return fahrenheit + " fahrenheit deg = " + (fahrenheit - 32) * 5 / 9 + " celcius deg"
}

console.log(convertFahrenheitToCelcius(50))
console.log(convertFahrenheitToCelcius(32))
console.log(convertFahrenheitToCelcius(68))

let tempPhilla = convertFahrenheitToCelcius(30)
console.log(tempPhilla)