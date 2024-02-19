console.log("Exercício 54:");

function orderArrayDecreasingly(array) {

    array = array.sort().reverse();

    return array;
}

console.log(orderArrayDecreasingly([20, 10, 90, 70]));