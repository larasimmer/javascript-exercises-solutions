console.log("Exercício 40:");

function stringReverse(string) {
    let stringArray = Array.from(string);
    let y = stringArray.length;
    let newString = [];
    
    while (y >= 1) {
        newString.push(stringArray[y -1]);
        y--;
    }

    console.log(newString.join(''));
}

stringReverse('Fernanda');