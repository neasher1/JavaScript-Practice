const jim = 19;
const dela = 97;
const chinku = 119;
//Using function
function getMax(jim, dela, Chinku) {
    if (jim > dela && jim > chinku) {
        return console.log("JIm");
    }
    else if (dela > jim && dela > chinku) {
        return console.log("Dela");
    }
    else {
        return console.log("Chinku will get the cake");
    }
}

function getMin(jim, dela, Chinku) {
    if (jim < dela && jim < chinku) {
        return console.log("JIm");
    }
    else if (dela < jim && dela < chinku) {
        return console.log("Dela");
    }
    else {
        return console.log("Chinku will get the cake");
    }
}

getMax(jim, dela, chinku);
getMin(jim, dela, chinku);

//Using Math
function get1Max(jim, dela, Chinku) {
    return Math.max(jim, dela, chinku);
}
const maxNumber = get1Max(jim, dela, chinku);
console.log(maxNumber);

function get1Min(jim, dela, Chinku) {
    return Math.min(jim, dela, chinku);
}
const minNumber = get1Min(jim, dela, chinku);
console.log(minNumber);