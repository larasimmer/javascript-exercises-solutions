console.log("Exercício 51:");

function calculateFactorial(number) {
    let multiplication = 1;

    for (let n = 1; n <= number; n++) {
        multiplication = multiplication*n;
    }

    return multiplication;
}

console.log(calculateFactorial(5));