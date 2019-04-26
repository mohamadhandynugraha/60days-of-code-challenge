// create an array with 5 different todos
// you have x todos
// print the first and second to last item -> todos: walk the dog
const todos = ["Belajar JavaScript udemy Andrew Mead", "Mengerjakan challenge FreeCodeCamp", "Melihat pelatihan cloud" +
" engineering Google", "Makan", true, 12, -12039103.211948];
console.log(`You have ${todos.length} todos`);
for (let i = 0; i<= todos.length - 1; i++){
    console.log(`Todo: ${todos[i]}`);
}

// challenge area delete the item number 3
// add a new item onto the end
// remove the first item from the list
todos.splice(2, 1);
console.log(todos);
todos.push("Belajar Learning how to learn");
console.log(todos);
todos.shift();
console.log(todos);

// forEach
// challenge area
// 1. the first item
// 2. second item
console.log(`Todos yang harus di kerjakan ada ${todos.length}, diantaranya:`);
todos.forEach(function (item, index) {
    console.log(`${index + 1}. ${item}`)
});

// using for loop print
console.log();
console.log(`ada ${todos.length} todos yang harus di kerjakan yaitu: `);
for (let index = 0; index <= todos.length - 1; index++){
    console.log(`${index + 1}. ${todos[index]}`)
}