console.log("Exercício 66:");

function createNewArrayUsingCallback(array, callback) {
    return array.filter(callback);
}

function callbackFunction(num) {
    if (num%2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(createNewArrayUsingCallback([10, 22, 20 ,11], callbackFunction));