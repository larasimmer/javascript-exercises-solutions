console.log("Exercício 57:");

function addOddNumbers(array) {
    let sum = 0;
    for (let i=0; i < array.length; i++) {
        if (array[i]%2 !== 0) {
            sum = sum + array[i];
        }
    }

    return sum;
}

console.log(addOddNumbers([1, 15, 90, 13]));