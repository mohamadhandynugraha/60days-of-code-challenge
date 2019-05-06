document.querySelector("button").addEventListener("click", function(){
   console.log("Button clicked") 
});

// e dibawah merupakan bawaan dari event
// mau coba ganti nama tombol (yang ada idnya) 
// kita kasih nama sebelumnya Create another note
document.getElementById("anotherNote").addEventListener("click", function(e){
    // kita ganti jadi new Value
    // menggunakan property target
    e.target.textContent = "New Value";
})