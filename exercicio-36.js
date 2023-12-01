console.log("Exercício 36:");

for (let h = 1; h <= 100; h++) {
    let dividersSum = 0;
    
    for (let v = 1; v <= h/2; v++) {
        if (v < h && h%v == 0) {
            dividersSum = dividersSum + v;
        }
    }

    if (dividersSum == h) {
        console.log(h,'é um número perfeito.')
    }
}

