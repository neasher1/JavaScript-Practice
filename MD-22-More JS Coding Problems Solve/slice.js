const friends = [1, 2, 3, 4, 5, 6, 7];
//don't change the original array, it will just give you a copy from array
const partial = friends.slice(2, 6);
console.log(partial);
console.log(friends);

//will change the original array and delete the array
const friends1 = [1, 2, 3, 4, 5, 6, 7];
const partial1 = friends1.splice(0, 3);
console.log(partial1);
console.log(friends1);