console.log("Exercício 63:");

function checkForPrimerNumbers(number) {
    let arrayOfPrimeNumbers = [];
    let numberIsPrime = false;

    for (let i=2; i<=number; i++) {
        for(let j=2; j <= i; j++) {

            if(i !== j && i%j === 0) {
                numberIsPrime = false;
                break;
            } else {
                numberIsPrime = true;
            }
        }

        if(numberIsPrime === true) {
            arrayOfPrimeNumbers.push(i);
        }
    }

    return arrayOfPrimeNumbers;
}

console.log(checkForPrimerNumbers(27));