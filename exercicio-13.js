console.log("Exercício 13:");

function calculateIMC(weight,height) {
    let IMC = weight/(height*height);

    if(IMC < 18.5) {
        console.log("A pessoa está abaixo do peso.");
    } else if (IMC >= 18.5 && IMC < 25) {
        console.log("IMC normal.");
    } else if (IMC >= 25 && IMC < 30) {
        console.log("A pessoa está com sobrepeso.");
    } else {
        console.log("A pessoa está com obesidade.")
    }
}

calculateIMC(80,1.56);
calculateIMC(59,1.63);
calculateIMC(120,1.61);
calculateIMC(60,1.98);