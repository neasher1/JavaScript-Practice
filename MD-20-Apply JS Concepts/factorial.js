function factorial(number) {
    let result = 1;
    for (let i = number; i >= 1; i--) {
        result = result * i;
    }
    return result;
}
const value = 5;
let fact = factorial(value);
console.log("Factorial of ", value, " = ", fact);

//while loop

function factorials(num) {
    let res = 1;
    let i = num;
    while (i >= 1) {
        res = res * i;
        i--;
    }
    return res;
}

let fact1 = factorials(value);
console.log("Factorial of ", value, " = ", fact1);

//while loop

function factorials(num) {
    let res = 1;
    let i = 1;
    while (i <= num) {
        res = res * i;
        i++;
    }
    return res;
}

let fact2 = factorials(value);
console.log("Factorial of ", value, " = ", fact2);