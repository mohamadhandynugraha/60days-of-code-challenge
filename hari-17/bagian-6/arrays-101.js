const notes = ["note 1", "oke", 12, true];
console.log(notes[1]);
console.log(notes[notes.length - 1]);
console.log(notes[notes.length]);

notes.push("Beli burger");
console.log(notes);
notes.pop();
console.log(notes);

// shift hapus item di awal
notes.shift();
console.log(notes);
// unshift add item di awal
notes.unshift("note 1 again");
console.log(notes);

// splice add item di middle
// argument yang ke 2 harus 0. Karena kalau >= 1 di akan menghapus
// contoh: notes = ["note 1", "note 2", "note 3"]
// notes.splice(1, 0);
// hasilnya -> ["note 1", "note 3"]
notes.splice(1, 0, "This is new second item in index 1");
console.log(notes);
// ganti index terakhir menjadi (valuenya menjadi) false
notes[notes.length - 1] = false;
console.log(notes);

// for each cocok untuk array
// passing a function into a function namanya -> callback
// callback function nya kita dapat 2 arguments -> item, index. (dari forEach API JavaScript)
// item dan index
// contohnya di bawah
notes.forEach(function (item, index) {
   console.log(`Notes -> '${item}' ada di posisi -> ${index}`)
});


// for loop
for (let index = 0; index <= 4; index++){
    for (let jIndex = 4; jIndex >= 0; jIndex--){
        if (index >= jIndex){
            process.stdout.write("*");
        } else {
            process.stdout.write(" ");
        }
    }
    console.log();
}

// for loop
for (let index = 0; index <= 2; index++){
    console.log(index)
}