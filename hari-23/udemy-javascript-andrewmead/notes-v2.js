const notes = [{
    title: "My next trip",
    body: "I would like to go to Spain"
}, {
    title: "Habbits to work on",
    body: "Exercise. Eating a bit better"
}, {
    title: "Office modification",
    body: "Got a new seat"
}];

// create notes function
document.querySelector("#create-note").addEventListener("click", (e) => {
    e.target.textContent = "New note was created";
});

// remove all notes
document.querySelector("#remove-all").addEventListener("click", () => {
   document.querySelectorAll(".note").forEach((note) => {
       note.remove();
    });
});

// input type event
// render notes search
const filter = {
    searchText: ""
};
const renderNotes = (notes, filters) => {
    const filteredNotes = notes.filter((note) => {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    });

    // bersihin note yang duplikat
    document.querySelector("#notes").innerHTML = '';

    // loop pada filteredNotes
    filteredNotes.forEach((note) => {
        const newNote = document.createElement("p");
        newNote.textContent = note.title;
        document.querySelector("#notes").appendChild(newNote);
    });
};

renderNotes(notes, filter);

document.getElementById("search-text").addEventListener("input", (e) => {
    filter.searchText = e.target.value;
    renderNotes(notes, filter);
});

