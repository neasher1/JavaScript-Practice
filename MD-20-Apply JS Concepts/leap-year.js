function checkLeapYear(firstYear, finalYear) {
    for (var i = firstYear; i <= finalYear; i++) {
        if ((i % 4 == 0) && (i % 100 != 0) || (i % 400 == 0)) {
            console.log(i);
        }
    }
}

let firstYear = 1950;
let finalYear = 2022;

let inputYear = checkLeapYear(firstYear, finalYear);
console.log("\n");

//Array to check leap year

var yearList = [1952, 1960, 1962, 1983, 1990, 2000, 2012, 2016, 2020, 2022];

console.log("Access Leap Year From Given Array: ")
function LeapYearCheckFArray(yearList) {
    let leapYearList = [];
    for (var i = 0; i < yearList.length; i++) {
        const year = yearList[i];
        if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
            leapYearList.push(year);
        }
    }
    return leapYearList;
}

console.log(LeapYearCheckFArray(yearList));