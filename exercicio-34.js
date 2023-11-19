console.log("Exercício 34:");

let c = 1;

while (c <= 100) {
    if (c%3 == 0 && c%5 != 0) {
        console.log('FIZZ');
    } else if (c%5 == 0 && c%3 != 0) {
        console.log('BUZZ');
    } else if (c%3 == 0 && c%5 == 0) {
        console.log('FIZZBUZZ');
    } else {
        console.log(c);
    }

    c++;
}