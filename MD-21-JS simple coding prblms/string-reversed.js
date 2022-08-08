function reverse(text) {
    let stringConcat = '';
    for (let i = text.length - 1; i >= 0; i--) {
        // const element = text[i];
        // stringConcat = stringConcat + element;
        stringConcat = stringConcat + text[i];
    }
    return stringConcat;
}

const myString = "I am a good boy";
const reversedResult = reverse(myString);
console.log(reversedResult);