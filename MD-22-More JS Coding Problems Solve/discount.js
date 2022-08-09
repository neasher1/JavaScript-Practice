/*
1. If ticket number is less than 100, per ticket price is 100
2. If ticket number is more than 100 but less than/equal to 200, first 100 tickets will be 100tk/piece and rest of tickets 90 tk/piece
3. if you purchased more than 200 tickets, 
    first 100 tckts --> 100tk
    101-200  ---> 90tk
    200+ ---> 70tk
*/

function ticketPrice(ticketQuantity) {
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;

    if (ticketQuantity <= 100) {
        const price = ticketQuantity * first100Rate;
        return price;
    }
    else if (ticketQuantity <= 200) {
        const first100TcktPrice = 100 * first100Rate;
        const restQuantityTicket = ticketQuantity - 100;
        const restQuantityTicketPrice = restQuantityTicket * second100Rate;
        const total = first100TcktPrice + restQuantityTicketPrice;
        return total;
    }
    else {
        const first100TcktPrice = 100 * first100Rate;
        const second100TcktPrice = 100 * second100Rate;
        const restQuantityTicket = ticketQuantity - 200;
        const restQuantityTicketPrice = restQuantityTicket * restTicketRate;
        const total = first100TcktPrice + second100TcktPrice + restQuantityTicketPrice;
        return total;
    }

}
const price = ticketPrice(320);
console.log("Price: ", price);

