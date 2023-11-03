console.log("Exercício 15:");

function checkPalindrome(word) {
    let wordArray = word.split("");
    let theMiddle = Math.floor(wordArray.length / 2);
    let length = wordArray.length;
    let isAPalindrome = false;

    if (wordArray.length%2 != 0) {
        for (let i = 1; i <= length - theMiddle - 1; i++) {
            if ((wordArray[theMiddle - i]) == (wordArray[theMiddle + i])) {
                isAPalindrome = true;
            }
        }

        if (isAPalindrome == true) {
            console.log(word,"é um palíndromo");
        } else {
            console.log(word,"não é um palíndromo");
        }

    } else {
        console.log(word,"não é um palíndromo");
    }
}

checkPalindrome("tenet");