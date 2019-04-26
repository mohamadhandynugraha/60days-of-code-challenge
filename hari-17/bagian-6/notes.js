const notes = [{
    title: "My next trip",
    body: "Vacation to Spain"
}, {
    title: "Working",
    body: "Working on the web dev project"
}, {
    title: "Get new seat",
    body: "Buy some new seat"
}
];

const findNotes = function(notes, query) {
    return notes.filter(function(note){
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
};

console.log(findNotes(notes, "tr"))