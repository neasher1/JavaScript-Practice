const names = ['abul', 'kabul', 'cabul', 'dabul', 'abul', 'abul', 'kabul'];

function removeDuplicate(name) {
    const uniqueName = [];
    for (let i = 0; i < name.length; i++) {
        const names = name[i];
        if (uniqueName.includes(names) === false) {
            uniqueName.push(names);
        }
    }
    return uniqueName;
}
const uniqueName = removeDuplicate(names);
console.log(uniqueName);