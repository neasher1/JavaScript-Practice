//is Best Friend Check
function isBestFriend(person1, person2) {
    for (let i = 0; i < (person1.length && person2.length); i++) {
        const element1 = person1[i];
        const element2 = person2[i];
        if ((typeof (element1.name) === 'string') && (typeof (element2.name) === 'string') && (typeof (element1.friend) === 'string') && (typeof (element2.friend) === 'string')) {
            if (element1.name === element2.friend && element1.friend === element2.name) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return "Please enter a string";
        }
    }
}
const person1 = [
    { name: "abul", friend: "babul" },
];
const person2 = [
    { name: "babul", friend: "abul" },
];
console.log(isBestFriend(person1, person2));