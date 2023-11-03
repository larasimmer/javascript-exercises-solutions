console.log("Exercício 10:");

function calculateGrades(grade1, grade2) {
    let result = (grade1 + grade2)/2;

    if (result >= 7) {
        console.log("O aluno foi aprovado com a média", result);
    } else {
        console.log("O aluno foi reprovado com a média", result);
    }
}

calculateGrades(3,0);
calculateGrades(7,7);
calculateGrades(10,9);