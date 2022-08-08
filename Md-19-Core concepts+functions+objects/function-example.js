function getAverage(assignment1Marks, assignment2Marks, assignment3Marks) {
    const totalMarks = assignment1Marks + assignment2Marks + assignment3Marks;
    const avg = totalMarks / 3;
    return avg;
}

const assignment1Marks = 60;
const assignment2Marks = 60;
const assignment3Marks = 25;

var avgMarks = getAverage(assignment1Marks, assignment2Marks, assignment3Marks);

console.log("Average: ", parseFloat(avgMarks.toFixed(2)), "\n");

//Another Example
function add(num1, num2) {
    const sum = num1 + num2;
    return sum;
}

const result1 = add(10, 20);
const result2 = add(20, 20);
const result3 = add(result1, result2);

console.log("Result1: ", result1);
console.log("Result2: ", result2);
console.log("Result3: ", result3);
