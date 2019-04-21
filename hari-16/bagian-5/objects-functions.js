// model -> buku
let myBook = {
    title: "1984",
    author: "James Orwell",
    pageCount: 326
}

let otherBook = {
    title: "A peoples history",
    author: "Howard Zinn",
    pageCount: 723
}

// buat function untuk print buku summary

let getSummary = function (book){
    console.log(`${book.title} written by ${book.author} with ${book.pageCount} pages long`)
}

getSummary(myBook)
getSummary(otherBook)

// kita juga bisa me-return kan object. Contohnya gini
let getBookSummary = function (book){
    return {
        summary: `${book.title} written by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let myBookSummary = getBookSummary(myBook)
console.log(myBookSummary.summary)
console.log(myBookSummary.pageCountSummary)

let otherBookSummary = getBookSummary(otherBook)
console.log(otherBookSummary.summary)
console.log(otherBookSummary.pageCountSummary)

// challenge area
// create a function - take fahrenheit in - return object with all three
let convertFahrenheitToCelciusAndKelvin = function (fahrenheit){
    return {
        fahrenheit: fahrenheit,
        celcius: (fahrenheit - 32) * 5 / 9,
        kelvin: (fahrenheit + 459.67) * 5 / 9
    }
}

// print
let fahrenheitToKelvin = convertFahrenheitToCelciusAndKelvin(74)
console.log(`${fahrenheitToKelvin.fahrenheit} fahrenheit deg = ${fahrenheitToKelvin.kelvin} kelvin deg`)

let fahrenheitToCelsius = convertFahrenheitToCelciusAndKelvin(50)
console.log(fahrenheitToCelsius.celcius)

// contoh lain me-return banyak value. Kegunaannya untuk konversi mata uang
let convertRupiahToAnotherCurrency = function (rupiah){
    return {
        usd: rupiah / 14000,
        sgd: rupiah / 10100,
        krw: rupiah / 12.49,
        btc: "bitcoin dilarang di Indonesia"
    }
}

let rupiahToKoreaWon = convertRupiahToAnotherCurrency(40000)
console.log(rupiahToKoreaWon.krw)

let rupiahToUSD = convertRupiahToAnotherCurrency(120000)
console.log(rupiahToUSD.usd)

let bitcoin = convertRupiahToAnotherCurrency(700000)
console.log(bitcoin.btc)