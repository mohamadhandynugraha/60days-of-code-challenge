// select notes (button)
let createNote = document.getElementById("create-note");
createNote.addEventListener("click", ()=> {

    const newNote = document.createElement("p");
    newNote.textContent = "This is new Note";
    document.querySelector("body").appendChild(newNote);
    console.log("Hello world");
});


document.getElementById("search-text").addEventListener("change", (e) => {
    console.log(e.target.value);
});

document.getElementById("search-text").addEventListener("input", (e) => {
    console.log(e.target.value);
});