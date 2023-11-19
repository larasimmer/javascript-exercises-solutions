console.log("Exercício 33:");

let num1 = 0;
let num2 = 1;

let fibonacci = [num1, num2];

for (let j = 2; j < 10; j++) {
    numberToAdd = num1 + num2;
    fibonacci.push(numberToAdd);
    num1 = num2;
    num2 = numberToAdd;
}

console.log(fibonacci);

