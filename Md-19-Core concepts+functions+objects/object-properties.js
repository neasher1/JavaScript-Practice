var shoppingCart = {
    books: 5,
    pen: 25,
    sunglass: 1,
    phone: 1,
    cloths: 5
}
//get specific properties access
var penCount = shoppingCart.pen;
console.log(penCount);

//alternative get specific properties access
var penCount2 = shoppingCart['pen'];
console.log(penCount2);

//alternative get specific properties access
var propertyName = 'cloths';
var propertyValue = shoppingCart[propertyName];
console.log(propertyName, ":", propertyValue);

//alternative get specific properties access
var name1 = 'books';
var name2 = shoppingCart[name1];
console.log(name1, ":", name2);

//access just keys from a object
var properties = Object.keys(shoppingCart);
console.log(properties)

//access just a properties values from a object
var propertiesValues = Object.values(shoppingCart);
console.log(propertiesValues);

console.log(shoppingCart);

/*
*
**set properties value
*
*/
shoppingCart.books = 10;
console.log(shoppingCart);

//alternative set propertis value
shoppingCart['books'] = 30;
console.log(shoppingCart);

//alternative set propertis value
var name5 = 'books';
shoppingCart[name5] = 50;
console.log(shoppingCart);