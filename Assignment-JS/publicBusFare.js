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