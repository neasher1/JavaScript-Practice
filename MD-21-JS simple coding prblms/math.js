const power = Math.pow(2, 3);
console.log(power);

const num1 = 25;
const num2 = 45;

const gap = Math.abs(num1 - num2);
console.log(gap);

if (gap < 5) {
    console.log("You guys can be friends");
}
else {
    console.log("Can't be friends");
}

//----------------
const num3 = 2.55633424;
console.log(Math.round(num3));

const num4 = 2.55633424;
console.log(Math.ceil(num4));

const num5 = 2.93455633424;
console.log(Math.floor(num5));
console.log("\n");

//random
for (let i = 0; i < 10; i++) {
    let random = Math.round(Math.random() * 10);
    console.log(random);

}

