//prblm1
var fruits = ['Apple', 'Banana', 'Orange'];

var findIndex = fruits.indexOf('Banana');
console.log(findIndex);

fruits[1] = 'Mango';
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.push('Watermelon');
console.log(fruits);

//prblm2
var num1 = 13;
var num2 = 79;
var num3 = 45;

if (num1 > num2 && num1 > num3) {
    console.log("Big = " + num1);
}
else if (num2 > num1 && num2 > num3) {
    console.log("Big = " + num2);
}
else if (num3 > num1 && num3 > num1) {
    console.log("Big = " + num3);
}
else {

}