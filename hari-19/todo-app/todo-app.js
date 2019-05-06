// get the title in H1
const titleH1 = document.querySelector("h1");
console.log(titleH1);

const allParagraph = document.querySelectorAll("p");
console.log(allParagraph);

// challenge area 2

// 1. create a link to the JavaScript file
// 2. remove all p tags that have "the" in the text\

let textParagraph = []

allParagraph.forEach(function (item){
    textParagraph.push(item.textContent);
});

console.log(textParagraph);

const deleteTodos = function(todos, query){
    todos.forEach(function(item){
        if(item.textContent.toLowerCase().includes(query.toLowerCase())){
            return item.remove();
        }
    })
}

deleteTodos(allParagraph, "the");