function fact(i) {
    if (i == 1) {
        return 1;
    }
    return i * fact(i - 1);
}
const result = fact(5);
console.log(result);