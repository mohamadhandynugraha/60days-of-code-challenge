let temp = 55; // fahrenheit

// logical AND operator - True if both side are true. false otherwise
// Logical OR operator - True if at least one side true. false otherwise.
if (temp >= 60 && temp <= 90) {
    console.log("It's pretty nice out")
} else if (temp <= 0 || temp >= 120) {
    console.log("Do not go outside")
} else {
    console.log("Do what you want")
}

// challenge are
// simple reservation system restaurant

let isGuestOneVegan = true;
let isGuestTwoVegan = false;

// are both vegan? only offer up vegan dishes
// at least one vegan? offer up non vegan and vegan options
// both non vegan? offer up anything on the menu

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log("Offer up vegan dishes. Here is vegan (only) dishes")
} else if (isGuestOneVegan || isGuestTwoVegan){
    console.log("Offer up vegan and non vegan dishes. Here is vegan and non vegan dishes")
} else {
    console.log("Offer up anything in the dishes. Here is all menu in the dishes")
}