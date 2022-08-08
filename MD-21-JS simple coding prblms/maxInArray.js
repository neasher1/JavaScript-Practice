function maxInArray(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        console.log(index, element);

        if (element > largest) {
            largest = element;
        }
    }
    return largest;

}

function minInArray(numbers) {
    let minimum = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < minimum) {
            minimum = numbers[i];
        }
    }
    return minimum;

}
const heights = [167, 190, 120, 45, 150, 900];
const result = maxInArray(heights);
console.log("Max Number: ", result);

const result1 = minInArray(heights);
console.log("Min Number: ", result1);