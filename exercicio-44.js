console.log("Exercício 44:");

function addMatrices(matrix1, matrix2) {
    let matrix3 = [];
    let i = 0;
    if (matrix1.length == matrix2.length) {
        do {
            matrix3[i] = [];
            let j = 0;
            do {
                matrix3[i][j] = matrix1[i][j] + matrix2[i][j];
                j++;
            } while (j < matrix1[i].length);

            i++;
        } while (i < matrix1.length);
        console.log(matrix3);
    } else {
        console.log('As matrizes devem ser de mesma ordem.');
    }
}

addMatrices([[1, 0], [5, -6]], [[1, 0], [5, -6]]);