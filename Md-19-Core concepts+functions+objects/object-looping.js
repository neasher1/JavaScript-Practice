var shoppingCart = {
    books: 5,
    pen: 25,
    sunglass: 100,
    phone: 1,
    cloths: 5,
    keyboard: 10
}

const keys = Object.keys(shoppingCart);
console.log(keys);

const values = Object.values(shoppingCart);
console.log(values);

console.log(shoppingCart, "\n");

//access properties and values together using loop
// var keys = [ 'books', 'pen', 'sunglass', 'phone', 'cloths', 'keyboard' ]
for (i = 0; i < keys.length; i++) {
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName];
    console.log(propertyName, ":", propertyValue);
}

console.log("\n");

//another way to access properties and values together using for in loop
//for in loop
for (var keysName in shoppingCart) {
    const valueCount = shoppingCart[keysName];
    console.log(keysName, ":", valueCount);
}