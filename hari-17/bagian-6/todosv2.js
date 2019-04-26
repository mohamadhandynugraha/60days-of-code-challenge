// 1. create an array of objects -> text, completed (boolean)
// 2. create function to remove a todos by text value

const todos = [{
    title: "Belajar JavaScript udemy Andrew Mead",
    completed: true
}, {
    title: "Mengerjakan challenge FreeCodeCamp JavaScript",
    completed: false
}, {
    title: "belajar learning how to learn coursera",
    completed: false
}, {
    title: "Makan",
    completed: true
}, {
    title: "Mandi",
    completed: false
}];
console.log(todos);
console.log();
const removeTodo = function (todo, text) {
    const index = todo.findIndex(function (item) {
        return item.title.toLowerCase() === text.toLowerCase() && item.completed === true
    });
    if (index === -1){
        console.log(`${text} tidak bisa dihapus karena belum selesai`)
    } else {
        todos.splice(index, 1)
    }
    // todos
};

// menggunakan filter untuk search
// kalau pake method dari javaScript yang filter usahakan buat variable
const findNotes = function(notes, query){
    return notes.filter(function (note) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
        const isBodyMatch = note.title.toLowerCase().includes(query.toLowerCase());
        return isTitleMatch || isBodyMatch;
    });
};

// menggunakan filter untuk search
// kalau pake method dari JavaScript yang filter usahakan buat variable
const getThingsTodo = function(todos){
    return todos.filter(function (todo) {
        return !todo.completed
    })
};

removeTodo(todos, "makan");
console.log();
console.log(todos);

console.log("************************************");
console.log(findNotes(todos, "m"));
console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
console.log(getThingsTodo(todos));
// todos
// todos