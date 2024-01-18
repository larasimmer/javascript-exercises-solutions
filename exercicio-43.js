console.log("Exercício 43:");

function verifyNumber(number) {
    let numberArray = Array.from(String(number));
    let areAllCharactersTheSame = false;
    let theMiddleIndex = (numberArray.length -1)/2;
    let counter = numberArray.length - 1;
    let isNumberAPalindrome = false;

    for (let d = 0; d <= numberArray.length - 1; d++) {
        if (numberArray[d] != numberArray[0]) {
            areAllCharactersTheSame = false;
            break;
        } else {
            areAllCharactersTheSame = true;
        }
    }

    if (areAllCharactersTheSame == true) {
        console.log('O número ' + number +  ' é um palíndromo.');
    } else {
        if (numberArray.length%2 != 0) {
            while (counter >= numberArray[theMiddleIndex]) {
                if ((numberArray[theMiddleIndex - counter]) == (numberArray[theMiddleIndex + counter])) {
                    isNumberAPalindrome = true;
                }

                counter--;
            }

            if (isNumberAPalindrome == true) {
                console.log('O número ' + number +  ' é um palíndromo.');
            }
        } else {
            console.log('O número ' + number +  ' não é um palíndromo.');
        }
    }
}

verifyNumber(55555);