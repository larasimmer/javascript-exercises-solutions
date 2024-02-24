console.log("Exercício 65:");

function sumArrayNumbersUsingCallback(array, callback) {

    return array.map(callback).reduce(function(total, currentValue) {
        return total + currentValue
    }, 0);
}

function callbackFunction(num) {
    return num = num + 1;
}

console.log(sumArrayNumbersUsingCallback([22, 20 ,10], callbackFunction));