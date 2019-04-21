if (true) {

    if (true) {
        // padahal gak pernah deklarasi variable.
        // inilah yang namanya leaked global variable di javascript
        // dan berhasil di print
        name = "Jen"
        console.log(name)
    }
}

if (true) {
    name = "Jen"
    console.log(name)
}