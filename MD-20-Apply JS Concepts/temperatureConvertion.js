//celciousToFarnheit
function celciousToFarnheit(celcious) {
    return celcious * 1.8 + 32;
}
let convertFarn = celciousToFarnheit(30);
console.log("Farenheight = ", convertFarn, "F");

//farenheightToCelcious
function farenheightToCelcious(farn) {
    return (farn - 32) * 0.556;
}
let celciousConverter = farenheightToCelcious(86);
console.log("Celcious = ", parseFloat(celciousConverter.toFixed(2)), "C");