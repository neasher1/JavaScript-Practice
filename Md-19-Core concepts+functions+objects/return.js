function add(num1, num2) {
    console.log("Numbers: ", num1, num2);
    var sum = num1 + num2;
    return sum;
}

var total = add(10, 20);
console.log("Total = ", total);
console.log();

/*
*
*
*/
function bringSingara(money) {
    console.log("TK = ", money);
    var singaraPrice = 10;
    var totalSinagra = money / singaraPrice;
    return totalSinagra;
}
var tk = 200;
var singraras = bringSingara(tk);
console.log("Total Singara: ", singraras);