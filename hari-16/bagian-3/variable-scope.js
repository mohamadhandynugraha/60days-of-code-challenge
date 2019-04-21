// lexical scoping
// global scope - define outside of all code blocks
// local scope - define inside a code block


let varOne = 'varOne';
if (true){
    console.log(varOne);
    let varTwo = "varTwo";
    console.log(varTwo)
}
console.log(varOne);