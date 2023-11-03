console.log("Exercício 14:");

function checkLeapYear(year) {
    if ((year%4 == 0 && year%100 != 0) || (year%4 == 0 && year%100 == 0 && year%400 == 0)) {
        console.log(year,"é bissexto");
    } else {
        console.log(year,"não é bissexto");
    }
}

checkLeapYear(2000);
checkLeapYear(2001);
checkLeapYear(2100);