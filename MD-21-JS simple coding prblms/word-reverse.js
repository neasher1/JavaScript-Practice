function reverse(str) {
    const words = str.split(' ');
    //[ 'I', 'am', 'a', 'good', 'boy' ]
    let result = [];
    for (let i = words.length - 1; i >= 0; i--) {
        const element = words[i];
        result.push(element);
    }
    const sentenceJoin = result.join(' ');
    return sentenceJoin;
}
const str = 'I am a good boy';
const result = reverse(str);
console.log(result);