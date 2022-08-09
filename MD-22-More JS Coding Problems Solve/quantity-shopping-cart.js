const cart = [
    { name: "Shoe", price: 1200, quantity: 2 },
    { name: "Pant", price: 2200, quantity: 5 },
    { name: "Belt", price: 700, quantity: 4 },
    { name: "Shirt", price: 3200, quantity: 3 },
];

function totalCart(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const productTotal = product.price * product.quantity;
        sum = sum + productTotal;
    }
    return sum;
}
const totalCost = totalCart(cart);
console.log(totalCost);