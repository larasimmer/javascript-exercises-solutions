console.log("Exercício 59:");

function duplicateArrayItems(array) {
    let duplicatedArray = [];
    for (let i=0; i < array.length; i++) {
        duplicatedArray.push(array[i]*2);
    }

    return duplicatedArray;
}

console.log(duplicateArrayItems([1, 0, 4, 3, -3]));