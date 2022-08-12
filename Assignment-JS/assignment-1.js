//Radian to Degree Converter
function radianToDegree(radian) {
    if (typeof (radian) === 'number') {
        return (radian * (180 / Math.PI)).toFixed(2);
    }
    else {
        return "Please enter a radian number";
    }
}

const radian = 10;
const radianToDegConverter = radianToDegree(radian);
console.log(radianToDegConverter);


//is JavaScript File check
function isJavaScriptFile(file) {
    if (typeof (file) === 'string') {
        const ext = file.substring(file.lastIndexOf('.'));
        if (ext === '.js') {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return "Please Enter a Valid File Name";
    }
}

const fileName = 'app.js';
const fileNameCheck = isJavaScriptFile(fileName);
console.log(fileNameCheck);



//Oil Price
function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity) {
    if ((typeof (dieselQuantity) === 'number') && (typeof (petrolQuantity) === 'number') && (typeof (octaneQuantity) === 'number')) {
        const perDieselPrice = 114;
        const perPetrolPrice = 130;
        const perOctanePrice = 135;

        dieselPrice = perDieselPrice * dieselQuantity;
        petrolPrice = perPetrolPrice * petrolQuantity;
        octanePrice = perOctanePrice * octaneQuantity;

        return dieselPrice + petrolPrice + octanePrice;
    }
    else {
        return "Please Enter a Valid Number";
    }

}
const oil = oilPrice(1, 0, 2);
console.log(oil);


//public Bus Fare
function publicBusFare(people) {
    if (typeof (people) === 'number') {
        const publicBusTicketPrice = 250;
        const busSitCapacity = 50;
        const microBusCapacity = 11;

        const bus = people / busSitCapacity;
        const busCount = Math.floor(bus);

        const remainPeopleFromBus = people - (busCount * busSitCapacity);

        const micro = Math.floor(remainPeopleFromBus / microBusCapacity);

        const publicBus = remainPeopleFromBus - (micro * microBusCapacity);

        publicBusTotalTicketPrice = publicBus * publicBusTicketPrice;
        return publicBusTotalTicketPrice;
    }
    else {
        return "Please enter a valid number";
    }

}

const people = 365;
console.log(publicBusFare(people));



//is Best Friend Check
function isBestFriend(person1, person2) {
    for (let i = 0; i < (person1.length && person2.length); i++) {
        const element1 = person1[i];
        const element2 = person2[i];
        if ((typeof (element1.name) === 'string') && (typeof (element2.name) === 'string') && (typeof (element1.friend) === 'string') && (typeof (element2.friend) === 'string')) {
            if (element1.name === element2.friend && element1.friend === element2.name) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return "Please enter a string";
        }
    }
}
const person1 = [
    { name: "abul", friend: "babul" },
];
const person2 = [
    { name: "babul", friend: "abul" },
];
console.log(isBestFriend(person1, person2));