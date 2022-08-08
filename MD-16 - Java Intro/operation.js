var onionPrice = 20;
var eggPrice = 30;

console.log("onionPrice: " + onionPrice);
console.log("eggPrice: " + eggPrice);

var totalPrice = onionPrice + eggPrice;
var totalPriceDiffn = onionPrice - eggPrice;
var totalPriceMultiply = onionPrice * eggPrice;
var totalPriceDiv = onionPrice / eggPrice;

console.log("Sum: " + totalPrice);
console.log("Subtraction: " + totalPriceDiffn);
console.log("Multiply: " + totalPriceMultiply);
console.log("Division: " + totalPriceDiv);

eggPrice = eggPrice + 20;
onionPrice += 20;

console.log("Egg Price Update : " + eggPrice);
console.log("Onion Price Update : " + onionPrice);


onionPrice++;
eggPrice--;
console.log("Onion Price Inreased : " + onionPrice);
console.log("eggPrice Price Decreased : " + eggPrice);

onionPrice++;
eggPrice--;
console.log("Onion Price Inreased : " + onionPrice);
console.log("eggPrice Price Decreased : " + eggPrice);