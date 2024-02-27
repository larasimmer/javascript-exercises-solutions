console.log("Exercício 67:");

function modifyArraysUsingCallback(arrayDeArrays, callback) {
    return arrayDeArrays.map(callback);
}

function callbackFunction(array) {
    let result = array.reduce(function(total, currentValue) {
        return total + currentValue;
    }, 0);

    return result;
}

console.log(modifyArraysUsingCallback([[1, 2, 3], [4, 5, 6], [7, 8, 9]], callbackFunction));