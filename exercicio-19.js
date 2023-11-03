console.log("Exercício 19:");

function checkIfNumberIsInsideInterval(inferiorLimit,superiorLimit,number) {
    if (number >= inferiorLimit && number <= superiorLimit) {
        console.log(number,"está entre",inferiorLimit,"e",superiorLimit);
    } else {
        console.log(number,"não está entre",inferiorLimit,"e",superiorLimit);
    }
}

checkIfNumberIsInsideInterval(-2,10,8);
checkIfNumberIsInsideInterval(-2,10,-2);
checkIfNumberIsInsideInterval(-2,10,10);
checkIfNumberIsInsideInterval(-2,10,50);