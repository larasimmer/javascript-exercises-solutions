console.log("Exercício 16:");

function checkGreaterNumber(number1, number2, number3) {
    if (number1 > number2 && number1 > number3) {
        console.log(number1, "é o maior número.");
    } else if (number2 > number1 && number2 > number3){
        console.log(number2, "é o maior número.");   
    } else if (number1 == number2 && number1 == number3){
        console.log("Os números são iguais.");
    } else if (number1 == number2 && number1 > number3){
        console.log(number1, "é o maior número.");
    } else if (number1 == number3 && number1 > number2){
        console.log(number1, "é o maior número.");
    } else if (number2 == number3 && number2 > number1){
        console.log(number2, "é o maior número.");
    } else {
        console.log(number3, "é o maior número.");
    }
}

checkGreaterNumber(3, 3, 3);
checkGreaterNumber(4, 3, 2);
checkGreaterNumber(4, 5, 2);
checkGreaterNumber(4, 5, 6);
checkGreaterNumber(7, 7, 6);
checkGreaterNumber(8, 5, 8);
checkGreaterNumber(8, 9, 9);
