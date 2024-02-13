console.log("Exercício 53:");

function verifyIfNumberIsPrime(number) {
    for (let divisor = 2; divisor < number; divisor++) {
        let rest = number%divisor;

        if (rest === 0) {
            return false;
        }
    }

    return true;
}

console.log(verifyIfNumberIsPrime(8));