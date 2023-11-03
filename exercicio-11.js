console.log("Exercício 11:");

function canIVote(myAge) {
    if(myAge >= 18 && myAge < 70) {
        console.log("Voto obrigatório.");
    } else if (myAge >= 16 && myAge < 18 || myAge >= 70) {
        console.log("Você pode votar, mas não é obrigatório.");
    } else {
        console.log("Você ainda não pode votar.");
    }
}

canIVote(15);
canIVote(16);
canIVote(18);
canIVote(70);