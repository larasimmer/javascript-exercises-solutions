console.log("Exercício 12:");

function checkFinalGrade(finalGrade) {
    if (finalGrade >= 7) {
        console.log("O aluno foi aprovado.");
    } else if (finalGrade >= 5 && finalGrade < 7) {
        console.log("O aluno está de recuperação.");
    } else {
        console.log("O aluno foi reprovado.");
    }
}

checkFinalGrade(2);
checkFinalGrade(6.4);
checkFinalGrade(8);
checkFinalGrade(6.98);