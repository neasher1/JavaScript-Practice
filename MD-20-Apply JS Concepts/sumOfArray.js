function sumOfArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum += element;
    }
    return sum;
}

let numbers = [10, 20, 30, 40, 50, 60, 70, 60, 90, 100];
let totalSum = sumOfArray(numbers);
console.log("Sum = ", totalSum);

//sum of odd numbers from array

function sumOfOddNumbers(listNumbers) {
    const oddNumbersArray = [];
    for (let i = 0; i < listNumbers.length; i++) {
        const indexs = i;
        const elemtnts = listNumbers[i];

        if (elemtnts % 2 !== 0) {
            console.log(indexs, elemtnts);
            oddNumbersArray.push(elemtnts);
        }
    }
    return oddNumbersArray;
}

let listNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 20];
let oddNumbersList = sumOfOddNumbers(listNumbers);
console.log(oddNumbersList);

const oddNumberSum = sumOfArray(oddNumbersList);
console.log("Sum of Odd = ", oddNumberSum);

//sum of even numbers
function sumOfEven(listNumbers) {
    let evenNumberList = [];
    for (let i = 0; i < listNumbers.length; i++) {
        const element = listNumbers[i];
        if (element % 2 === 0) {
            evenNumberList.push(element);
        }
    }
    return evenNumberList;
}

let evenNumbers = sumOfEven(listNumbers);
console.log("Even Numbers: ", evenNumbers);

let sumOfEvenNumbers = sumOfArray(evenNumbers);
console.log("Sum of even = ", sumOfEvenNumbers);