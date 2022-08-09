const phones = [
    { name: 'Samsung', storage: '32gb', camera: 10, price: 32000, color: 'black' },
    { name: 'Oppo', storage: '32gb', camera: 10, price: 42000, color: 'Silver' },
    { name: 'Iphone', storage: '32gb', camera: 10, price: 82000, color: 'black' },
    { name: 'Realme', storage: '32gb', camera: 10, price: 22000, color: 'black' },
    { name: 'Walton', storage: '32gb', camera: 10, price: 20000, color: 'black' },
    { name: 'Shaowmi', storage: '32gb', camera: 10, price: 30000, color: 'black' },
];

function cheapestPhones(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}
const mySelection = cheapestPhones(phones);
console.log(mySelection);