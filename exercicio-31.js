console.log("Exercício 31:");

function guessNumber(number,min,max) {
    let startingPoint = Math.round((min + max)/2);

    while(number != startingPoint) {
        if (number > startingPoint) {
            min = startingPoint;
            startingPoint = Math.round((min + max)/2);
        } else {
            max = startingPoint;
            startingPoint = Math.round((min + max)/2);
        }
    }
    
    console.log("Já adivinhei, o número é:",startingPoint);
}

guessNumber(5,1,15)
guessNumber(80,1,100)

