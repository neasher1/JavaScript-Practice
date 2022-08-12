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
