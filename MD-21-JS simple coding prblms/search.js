const lyrics = "Sada sada kala kala, rong jomeche sada kala, tmi bondhu kala pakhi, ami jeno ki."
const searchLyris = 'PaKhi';

const doesExist = lyrics.toLocaleLowerCase().includes(searchLyris.toLocaleLowerCase());

console.log(doesExist);

console.log(lyrics.indexOf('Sadads'));

if (lyrics.indexOf('Sadads') !== -1) {
    console.log("string exist");
}
else {
    console.log("DOnes not exist")
}

//startswith
console.log(lyrics.startsWith("2mi"));

//endswidth

let fileName = 'myFile.pdf';
let fileName1 = 'myFile.png';

console.log(fileName.endsWith('.pdf'));