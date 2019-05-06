// dom
// Document Object Model
const h2 = document.querySelector("h2");
h2.remove();

// jadi konsep sederhana untuk DOM manipulation adalah
// 1. Query dulu elementnya yang di html
// 2. Element yang udah di query selanjutnya bisa diolah

// nah sekarang di file index.html ada 2 paragraf.
// kalau kodingan ini dijalankan
const p = document.querySelector("p");
console.log(p);
// maka variable p akan menjadi "paragraph tidak dihapus" p tag yang pertama

// coba dapatkan variable p semua
const ps = document.querySelectorAll("p");
console.log(ps);

// hapus semua p tag dengan remove
ps.forEach(function (item){
    // item.remove(); // untuk remove
    // console.log(item.textContent) // untuk mendapatkan text content dari element
    item.textContent = "Paragraf yang sangat baru textnya";
    
});

// cara menangkap event listener di button
// query selector dulu buttonnya
// kemudian addEventListener
document.querySelector("button").addEventListener("click", function(){
   console.log("Button Clicked"); 
});