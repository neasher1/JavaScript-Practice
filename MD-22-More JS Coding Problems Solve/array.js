const country = "Bangladesh";
const isIndependent = true;
const age = 90;
const student = {
    name: "Neasher",
    id: 15,
    dept: "CSE"
}
const friends = [1, 2, 3, 4, 5, 6, 7];
const friends1 = [1, 2, 3, 4, 5, 6, 7];

const friendsAdd = friends.concat(friends1);
console.log(friendsAdd);

console.log(typeof country);
console.log(typeof isIndependent);
console.log(typeof age);
console.log(typeof student);
//check data type of array to use Array.isArray()
console.log(Array.isArray(friends));

console.log(friends.includes(19));
console.log(friends.includes(7));