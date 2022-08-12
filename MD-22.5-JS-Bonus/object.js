const student = {
    name: "Neasher",
    id: 15,
    dept: "CSE",
    isSingle: true,
    friends: ['Maruf', 'Hasib', 'Hridoy'],
    movies: [
        { name: "No 1 Shakib Khan", year: 2018 },
        { name: "Hawa", year: 2022 },
    ],
    act: function () {
        console.log("Acting like a Shakib");
    },
    car: {
        brand: "Tesla",
        made: "Elon Mask",
        year: 1990,
        manufacturer: {
            brand: "Tesla Company",
            est: 2050,
        }
    }
}

student.act();
console.log(student.act);
console.log(student);
console.log(student.car);
console.log(student.car.manufacturer);