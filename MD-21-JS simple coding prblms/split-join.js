const lyrics = "Sada sada kala kala. rong jomeche sada kala. tmi bondhu kala pakhi, ami jeno ki."

const parts = lyrics.split(' ');
const sentences = lyrics.split('.');
const chars = lyrics.split('');
console.log(parts);
console.log(sentences);
console.log(chars);

console.log(lyrics.slice(5, 10));

console.log(lyrics.substring(5, 10));

const lines = [
    'Sada sada kala kala',
    ' rong jomeche sada kala',
    ' tmi bondhu kala pakhi, ami jeno ki',
];

console.log(lines.join('+++'));