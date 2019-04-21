let name = "Jen"
let anotherName // undefined variable

if (name == undefined){
    console.log(name)
}

if (anotherName == undefined){
    console.log("Please provide a name")
}

// undefined for function
let cube = function(num){
    console.log("num = " + num)
    return num * num * num;
}

// hasilnya undefined
console.log(cube())

// undefined as function return value default
// contohnya
let square = function(number) {
    console.log(number * number)
}

let result = square();
console.log(result)

// null as assigned value
let age = null
console.log(age)