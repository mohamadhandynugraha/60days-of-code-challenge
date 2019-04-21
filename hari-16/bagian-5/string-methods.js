let name = "Mohamad handy Nugraha";
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.toLowerCase().includes('nugraha'.toLowerCase()));

let password = "abc123password0123";
console.log(password.includes("password"));

// trim -> remove whitespace
let exampleTrim = "    JASDJF a        ";
let nameTrim = exampleTrim.trim();
console.log(nameTrim);

// challenge area
// create a function isValidPassword
// return true length is more than 8 and doesnt contain word password
let isValidPassword = function (word) {
    return (!word.includes("password") && word.length >= 8)
};
console.log("***********************************************");
console.log(isValidPassword("asdfp"));
console.log(isValidPassword("abc123!@#$%^&"));
console.log(isValidPassword("asdfpdsfsfpassword"));