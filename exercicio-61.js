console.log("Exercício 61:");

function squareRootArrayItems(array) {
    let squaredRootArray = array.map(function(currentValue) {
        return Math.sqrt(currentValue);
    });

    return squaredRootArray;

}

console.log(squareRootArrayItems([16, 0, 4, 9, 81]));