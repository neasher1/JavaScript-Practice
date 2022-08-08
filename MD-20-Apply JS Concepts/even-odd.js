function isEven(number) {
    const rem = number % 2;
    if (rem === 0) {
        return true;
    }
    else {
        return false;
    }
}

var number1 = isEven(9);
console.log(number1);

var number1 = isEven(100);
console.log(number1);