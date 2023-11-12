console.log("Exercício 30:");

for (let m = 2; m <= 100; m++) {
    let isPrime = true;
    for (let l = 2; l < m; l++) {
        if (m%l == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(m,"é um número primo.");
    }
}