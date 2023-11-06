console.log("Exercício 22:");

function checkHowManyDays(month) {
    switch(month) {
        case 2:
            console.log("O mês",month,"tem 28 ou 29 dias.");
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            console.log("O mês",month,"tem 30 dias.");
            break;
        default:
            console.log("O mês",month,"tem 31 dias.");
    }
}

checkHowManyDays(1);
checkHowManyDays(2);
checkHowManyDays(4);
checkHowManyDays(12);

