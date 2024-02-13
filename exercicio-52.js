console.log("Exercício 52:");

function calculateFibonacciNumber(number) {
    let firstNumber = 0;
    let secondNumber = 1;

    let fibonacciSequence = [firstNumber, secondNumber];

    for (let counter = 2; counter <= number; counter++) {
        fibonacciSequence[counter] = fibonacciSequence[counter - 1] + fibonacciSequence[counter - 2];
    }

    return fibonacciSequence[number];
}

console.log(calculateFibonacciNumber(6));