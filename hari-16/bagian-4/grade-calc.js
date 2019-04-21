let studentScore = function (jawabanBenar, totalSoal = 20){
    if (jawabanBenar <= -1){
        jawabanBenar = 0
    }
    let nilai = jawabanBenar / totalSoal * 100
    let letterGrade = ''
    if (nilai >= 90){
        letterGrade = 'A'
    } else if (nilai >= 80){
        letterGrade = 'B'
    } else if (nilai >= 70){
        letterGrade = 'C'
    } else if (nilai >= 60){
        letterGrade = 'D'
    } else {
        letterGrade = 'E'
    }
    return `You got a ${letterGrade} (${nilai}%)`
}

var handyStudent = studentScore(15)
console.log(handyStudent)

console.log(studentScore(20, 30))
console.log(studentScore(27, 30))
console.log(studentScore(27, 100))
console.log(studentScore(-1, 100))
console.log(studentScore(17, 20))