console.log("Exercício 39:");

function factorialCalculation(number) {
    let factorial = 1;
    for (let z = 1; z <= number; z++) {
        factorial = factorial * z;
    }

    console.log(factorial);
}

factorialCalculation(4);