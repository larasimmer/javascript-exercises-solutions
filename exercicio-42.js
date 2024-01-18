console.log("Exercício 42:");

function binaryToDecimalConverter(binary) {
    let binaryArray = Array.from(String(binary));
    let sum = 0;

    for (let u = binaryArray.length - 1, index = 0; u >= 0, index <= binaryArray.length - 1; u--, index++) {
        let exp = 2**u*binaryArray[index];
        sum = sum + exp;
    }

    console.log(binary + ' em decimal é ' + sum);
}

binaryToDecimalConverter(1010);