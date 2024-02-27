console.log("Exercício 69:");

function repeatUsingCallback(num, callback) {
    callback(num);
}

function callbackFunction(num) {
    for(let i=0; i < num; i++) {
        console.log('Olá!');
    }
}

console.log(repeatUsingCallback(6, callbackFunction));