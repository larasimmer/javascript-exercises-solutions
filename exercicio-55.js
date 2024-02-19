console.log("Exercício 55:");

function findSmallestNumber(array) {
    let smallestNumber = array[0];

    for(let i = 1; i < array.length; i++) {
        if(array[i] < smallestNumber) {
            smallestNumber = array[i];
        }
    }

    return smallestNumber;
}

console.log(findSmallestNumber([100, -4, 90, -20]));