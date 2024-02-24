console.log("Exercício 64:");

function countWords(string) {
    let words = string.split(' ').length;

    return 'The string has ' + words + ' words.';
}

console.log(countWords('Better call Saul.'));