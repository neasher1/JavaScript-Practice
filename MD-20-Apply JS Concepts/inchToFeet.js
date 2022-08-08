function inchToFeetConverter(inch) {
    const feet = inch / 12;
    return feet;
}

let dadaInches = 144;
let dadaFeet = inchToFeetConverter(dadaInches);
console.log("Dadar height = ", dadaFeet, "feet");

let dadiInches = 60;
let dadiFeet = inchToFeetConverter(dadiInches);
console.log("Dadir height = ", dadiFeet, "feet");

let nati = 12;
let natiFeet = inchToFeetConverter(nati);
console.log("Natir height = ", natiFeet, "feet");