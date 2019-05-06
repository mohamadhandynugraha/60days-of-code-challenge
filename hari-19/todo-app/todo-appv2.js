const todos = [{
    title: "Belajar JavaScript udemy Andrew Mead",
    completed: true
}, {
    title: "Mengerjakan challenge FreeCodeCamp JavaScript",
    completed: false
}, {
    title: "Belajar learning how to learn coursera",
    completed: true
}, {
    title: "Makan",
    completed: true
}, {
    title: "Mandi",
    completed: false
}];

// challenge area 
// print to the browser. You have 2 todos left 
// add a p for each todos above (use text value)
const todosLeft = document.createElement("h1");

// langkah berikutnya, tambahkan atau ganti text contentnya
// ini mau gua tambahin function untuk mengetahui todos apa saja yang belum dikerjakan
// nama functionnya, todoYangBelumSelesai
const jumlahTodoYangBelumSelesai = function(){
    let completedFalse = 0;
    todos.forEach(function(item){
        if(!item.completed){
            completedFalse++;
             
        }
    })
    todosLeft.textContent = `You have ${completedFalse} todo(s) left `;
    return document.querySelector("body").appendChild(todosLeft);
}

// langkah berikutnya masukan h1 ke HTML
// caranya menggunakan append child body

// todos yang belum selesai
const listTodoYangBelumSelesai = function(){
    todos.forEach(function(item, index) {
        if(!item.completed){
            const newPElement = document.createElement("p");
            newPElement.textContent = item.title;
            document.querySelector("body").appendChild(newPElement);
        }
    })
    
}
jumlahTodoYangBelumSelesai(); // ini fungsi untuk mendapatkan jumlah todos yang belum selesai
listTodoYangBelumSelesai(); // ini fungsi untuk menambahkan ke p tag di HTML berdasarkan todos (title todos) yang belum selesai

// kesimpulan:
// cara menambahkan dari JavaScript ke element HTML adalah sbb:
// 1. menggunakan method createElement dengan contoh -> const todosLeft = document.createElement("h1");
// jadi harus tau dulu element apa yang mau ditambahkan ke HTML
// 2. menggunakan property textContent untuk menambahkan teksnya, contoh -> newPElement.textContent = item.title;
// 3. selanjutnya, kalau tagnya udah, textContentnya juga udah selanjutnya menambahkan langsung ke HTML dengan cara -> 
// document.querySelector("body").appendChild(newPElement);
// karena kan mayoritas element atau tag seperti h1, p dll merupakan child dari body