function add(num1, num2) {
    console.log(num1, num2);
    console.log(arguments);
    console.log(arguments[9]);
}
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);