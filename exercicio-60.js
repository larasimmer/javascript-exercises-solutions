console.log("Exercício 60:");

function squareArrayItems(array) {
    let squaredArray = array.map(function(currentValue) {
        return currentValue**2;
    });

    return squaredArray;

}

console.log(squareArrayItems([1, 0, 4, 3, 9]));