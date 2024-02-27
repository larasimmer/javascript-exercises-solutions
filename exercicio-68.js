console.log("Exercício 68:");

function filterUsingCallback(array, callback) {
    return array.filter(callback);
}

function callbackFunction(num) {
    return num > 5;
}

console.log(filterUsingCallback([4, 5, 6, 7], callbackFunction));