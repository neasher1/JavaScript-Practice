let first = 10;
let second = 20;
let temp;
console.log(first, second);

//approcah 1
temp = first;
first = second;
second = temp;
console.log(first, second);

//approach 2 -- distructring array method
let a = 1;
let b = 2;
console.log(a, b);
[a, b] = [b, a];
console.log(a, b);