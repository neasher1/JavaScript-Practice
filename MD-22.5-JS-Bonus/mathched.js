const numbers = [1, 2, 3, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     console.log(element);
// }

//simplified way to access array with (for of loop)
// for (const element of numbers) {
//     console.log(element);
// }

const products = [
    { id: 1, name: "Walton phone", price: 22000 },
    { id: 2, name: "Iphone", price: 22000 },
    { id: 3, name: "Mac Book", price: 22000 },
    { id: 4, name: "Laptop", price: 22000 },
    { id: 5, name: "RealMe Phone", price: 22000 },
    { id: 6, name: "Nokia Phone", price: 22000 },
    { id: 7, name: "Hp Laptop", price: 22000 },
    { id: 8, name: "Oppo Phone", price: 22000 },
    { id: 9, name: "Techno", price: 22000 },
    { id: 10, name: "Lenevo Laptop", price: 22000 },
];

function matchedProducts(products, searching) {
    const matched = [];
    for (const product of products) {
        if (product.name.toLowerCase().includes(searching.toLowerCase())) {
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedProducts(products, 'laptop');
console.log(result);
