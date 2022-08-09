const cart = [
    { name: "Shoe", price: 1200 },
    { name: "Pant", price: 2200 },
    { name: "Belt", price: 700 },
    { name: "Shirt", price: 3200 },
];

function totalCart(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        sum = sum + product.price;
    }
    return sum;
}
const totalCost = totalCart(cart);
console.log(totalCost);