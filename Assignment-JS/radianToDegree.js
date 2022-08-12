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
