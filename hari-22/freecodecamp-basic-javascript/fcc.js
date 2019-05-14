//Setup
let contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop){
// Only change code below this line
    let count = 0;
    for(let i = 0; i < contacts.length; i++){
        if((name === contacts[i].firstName || name === contacts[i].lastName) && contacts[i].hasOwnProperty(prop)){
            return contacts[i][prop];
        } else if(name === contacts[i].firstName || name === contacts[i].lastName && !contacts[i].hasOwnProperty(prop)){
            return "No such property";
        } else {
            count++;
            if (count === contacts.length){
                return "No such contact"
            }
        }
    }
// Only change code above this line
}

// Change these values to test your function
console.log(lookUpProfile("Akira", "likes"));
console.log(lookUpProfile("Akira", "address"));
console.log(lookUpProfile("Bob", "likes"));
console.log(lookUpProfile("Kristian", "lastName"));
console.log(lookUpProfile("Sherlock", "likes"));
console.log(lookUpProfile("Harry", "likes"));