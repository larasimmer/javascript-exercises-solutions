console.log("Exercício 70:");

function applyCallbackFunctions(value, [callback1, callback2, callback3]) {
    return [callback1(value), callback2(value), callback3(value)];
}

function callbackFunction1(num) {
    return num*2;
}

function callbackFunction2(num) {
    return num*4;
}

function callbackFunction3(num) {
    return num*6;
}

console.log(applyCallbackFunctions(6, [callbackFunction1, callbackFunction2, callbackFunction3]));