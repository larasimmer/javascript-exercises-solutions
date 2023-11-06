console.log("Exercício 21:");

function checkSeason(month) {
    if (month >= 10 && month <= 12) {
        console.log("Primavera");
    } else if (month >= 1 && month <= 3) {
        console.log("Verão");
    } else if (month >= 4 && month <= 6) {
        console.log("Outono");
    } else {
        console.log("Inverno");
    }
}

checkSeason(2);
checkSeason(4);
checkSeason(8);
checkSeason(10);