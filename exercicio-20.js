console.log("Exercício 20:");

function classifyStudent(studentGrade) {
    if (studentGrade >= 8) {
        console.log("Score: A");
    } else if (studentGrade >= 5 && studentGrade < 8) {
        console.log("Score: B");
    } else if (studentGrade >= 2 && studentGrade < 5) {
        console.log("Score: C");
    } else {
        console.log("Score: D");
    }
}

classifyStudent(10);
classifyStudent(5);
classifyStudent(2);
classifyStudent(0);