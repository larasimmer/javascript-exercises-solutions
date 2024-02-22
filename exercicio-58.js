console.log("Exercício 58:");

function addEvenNumbers(array) {
    let initialValue = 0;

    let sum = array.reduce(function (total, currentValue) {
        if (currentValue%2 === 0) {
            return total + currentValue;
        } else {
            return total;
        }

    }, initialValue);

    return sum;
}

console.log(addEvenNumbers([90, 13, 4, 1, 6]));