// create a simple object di JavaScript
// dalam kasus ini memodelkan buku

let myBook = {
    title: "Animal Farm",
    author: "James Orwell",
    price: 19.45,
    pageCount: 326
}

// print objek buku
console.log(myBook)

// contoh print 1 property aja
console.log(myBook.author)

// kita bisa mengguakan template string untuk print value dari berbagai property objek buku
console.log(`${myBook.title} written by ${myBook.author} with price $${myBook.price}`)

// kita bisa mengubah value dari property objek buku
myBook.title = "1984"
console.log(`${myBook.title} written by ${myBook.author} with price $${myBook.price}`)

// challenge area 
// memodelkan objek people
// propertynya -> name, age, location

let mohamad = {
    name: "Mohamad Handy Nugraha",
    age: 23,
    location: "Indonesia"
}

console.log(`Hello, my name is ${mohamad.name} and I am ${mohamad.age} years old 
and I lived in ${mohamad.location}`)

mohamad.age++;
console.log(`Hello, my name is ${mohamad.name} and I am ${mohamad.age} years old 
and I lived in ${mohamad.location}`)

mohamad.age = 19
mohamad.location = "USA"
console.log(`Hello, my name is ${mohamad.name} and I am ${mohamad.age} years old 
and I lived in ${mohamad.location}`)