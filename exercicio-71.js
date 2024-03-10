console.log("Exercício 71:");

function applyCallbackAfterSomeTime(callback, time) {
    setTimeout(callback,time);
}

function callbackFunction() {
    console.log('Oi');
}

applyCallbackAfterSomeTime(callbackFunction, 5000);