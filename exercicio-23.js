console.log("Exercício 23:");

function checkLightColors(color) {
    switch(color) {
        case "verde":
            console.log("Prossiga.");
            break;
        case "amarelo":
            console.log("Atenção!");
            break;
        case "vermelho":
            console.log("Pare!");
            break;
        default:
            console.log("Esta cor não faz parte do semáforo.");
    }
}

checkLightColors("verde");
checkLightColors("roxo");
checkLightColors("amarelo");
checkLightColors("laranja");
checkLightColors("vermelho");