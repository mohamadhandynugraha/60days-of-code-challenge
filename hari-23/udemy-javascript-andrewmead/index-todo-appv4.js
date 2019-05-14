const todos = [{
    title: "Belajar JavaScript udemy Andrew Mead",
    completed: false
}, {
    title: "Mengerjakan challenge FreeCodeCamp JavaScript",
    completed: false
}, {
    title: "Belajar learning how to learn coursera",
    completed: false
}, {
    title: "Makan",
    completed: true
}, {
    title: "Mandi",
    completed: true
}];


const jumlahTodoYangBelumSelesai = document.createElement("h1");
/**
 * function tombol todos yang belum selesai
 *  list todos apa saja yang belum selesai?
 */

document.getElementById("tampilkan-list-todo-yang-belum-selesai").addEventListener("click", () => {
    tampilkanTodoYangBelumSelesai();
});
const tampilkanTodoYangBelumSelesai = () => {
    // mencari jumlah todos yang belum selesai
    const listTodoBelumSelesai = todos.filter((todo) => {
       return !todo.completed;
    });
    jumlahTodoYangBelumSelesai.textContent = `List todo yang belum selesai tersisa ${listTodoBelumSelesai.length} buah. Diantaranya: `;
    document.querySelector("body").appendChild(jumlahTodoYangBelumSelesai);
    todos.forEach((todo) => {
        if (!todo.completed){
            const todoBelumSelesai = document.createElement("p");
            todoBelumSelesai.textContent = `${todo.title}`;
            document.querySelector("body").appendChild(todoBelumSelesai);
        }
    });
};

/* Create todos function
 * tombol create todos! di click maka akan membuat todos baru dengan text default
 * New Todos was created!
 */
document.querySelector(".create-todo").addEventListener("click", () => {
    const newTodo = document.createElement("p");
    newTodo.textContent = "New Todo was created!";
    document.querySelector("body").appendChild(newTodo);
});

/**
 * Remove all todos function
 * tombol removes todos function di click maka semua todos akan hilang
 */
document.querySelector("#delete-all-todo").addEventListener("click", () => {
    document.querySelectorAll("p").forEach((item) => {
        item.remove();
    })
});

/**
 * add new todos input
 */
document.querySelector("#add-new-todo").addEventListener("change", (e) => {
    console.log(e);
    const newTodoViaChange = document.createElement("p");
    newTodoViaChange.textContent = e.target.value;
    document.querySelector("body").appendChild(newTodoViaChange);
});









