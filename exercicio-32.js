console.log("Exercício 32:");

function rockPaperScissors(move) {
    let options = ['pedra','papel','tesoura'];
    let computerMove = options[Math.floor(Math.random()*options.length)];
    
    do {
        if (((move == 'papel') && (computerMove == 'pedra')) || ((move == 'pedra') && (computerMove == 'tesoura')) || ((move == 'tesoura') && (computerMove == 'papel'))) {
            console.log("Você ganhou!");
            break;
        } else if (((move == 'pedra') && (computerMove == 'papel')) || ((move == 'tesoura') && (computerMove == 'pedra')) || ((move == 'papel') && (computerMove == 'tesoura'))) {
            console.log("O computador ganhou!");
            break;
        } else {
            console.log("Empate!")
        }

    } while(move != computerMove);

    console.log(computerMove);
    console.log(move);
}

rockPaperScissors('tesoura');

