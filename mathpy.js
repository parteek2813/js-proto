// const descripter = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log("Math before defining", descripter);
// console.log(Math.PI);

// Object.defineProperty(Math, "PI", {
//   writable: false,
//   enumerable: false,
// });
// console.log("Math after defining", Object.getOwnPropertyDescriptor(Math, "PI"));

// const chai = {
//   name: "ginger",
//   price: 250,
//   isAvailable: true,

//   orderChai: function () {
//     console.log("Chai ni bni");
//   },
// };

// console.log(
//   "Chai before defining",
//   Object.getOwnPropertyDescriptor(chai, "name")
// );

// Object.defineProperty(chai, "name", {
//   //   writable: false,
//   enumerable: false,
//   //   configurable: false,
// });

// console.log(
//   "Chai after defining",
//   Object.getOwnPropertyDescriptor(chai, "name")
// );

// for (let [key, value] of Object.entries(chai)) {
//   if (typeof value !== "function") {
//     console.log(`${key}=${value}`);
//   }
// }

// const student = {
//   name: "Alice",
//   age: 25,
//   courses: ["Math", "Science", "History"],
//   addCourse: function (courseName) {
//     this.courses.push(courseName);
//   },
// };

// console.log(student);

// QUESTION
// PRINT OBJECT
// function printObject(obj) {
//   for (let [key, value] of Object.entries(obj)) {
//     console.log(`${key}: ${value}`);
//   }
// }
// const person = {
//   name: "John",
//   age: 30,
//   city: "New York",
// };

// printObject(person);

// QUESTION
// const car = {
//   brand: "Toyota",
//   model: "Camry",
//   year: 2020,
// };

// const carDetails = { ...car, price: "500$" };
// console.log(carDetails);

// console.log(Object.values(carDetails));
