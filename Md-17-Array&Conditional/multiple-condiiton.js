var isGraduated = true;
var salary = 50000;
var cars = 1;

if (isGraduated === true && salary >= 50000 && cars >= 1) {
    console.log("Yes, We Can Marry");
}
else {
    console.log("We Can't Marry together");
}

var isGraduated = false;
var salary = 50000;
var cars = 1;

if (isGraduated === true || salary >= 50000 || cars >= 1) {
    console.log("Yes, We Can Marry");
}
if ((isGraduated === true && salary > 5000) || cars >= 1) {
    console.log("Prem kori");
}
else {
    console.log("We Can't Marry together");
}
console.log("\n");

var money = 10;
var biscuit = 20;
var danish = 50;
var batasha = 15;

if (biscuit < money) {
    console.log("Buy a biscuit");
}
else if (danish < money) {
    console.log("Buy a danish");
}
else if (batasha < money) {
    console.log("Buy a batasha");
}
else {
    console.log("Buy a tea");
}