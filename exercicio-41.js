console.log("Exercício 41:");

function decimalToBinaryConverter(decimal) {
    let dividedNumber = decimal;
    let binaryArray = [];
    let remainder;

    do {
        if (dividedNumber%2 == 0) {
            remainder = 0;
        } else {
            remainder = 1;
        }

        dividedNumber = Math.floor(dividedNumber/2);
        binaryArray.push(remainder);
    } while (dividedNumber > 0);

    console.log(decimal + ' em binário é: ' + binaryArray.reverse().join(''));
} 

decimalToBinaryConverter(10);