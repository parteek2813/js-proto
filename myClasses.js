// ES6
// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   encryptPassword() {
//     return `${this.password}abc`;
//   }

//   changeUsername() {
//     return `${this.username.toUpperCase()}`;
//   }
// }

// const chai = new User("chai", "chai@gmail.com", "123");

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

// BEHIND THE SCENES

// function User(username, email, password) {
//   this.username = username;
//   this.email = email;
//   this.password = password;
// }

// // injecting the fn in the prototype
// User.prototype.encryptPassword = function () {
//   return `${this.password}abc`;
// };

// User.prototype.changeUsername = function () {
//   return `${this.username.toUpperCase()}`;
// };

// const tea = new User("tea", "tea@gmail.com", "123");

// console.log(tea.encryptPassword()); // 123abc
// console.log(tea.changeUsername()); // TEA

//  WITH ARRAY
// function arr() {
//   console.log("Hello this is a function");
// }

// Function.prototype.encryptPassword = function () {
//   console.log("I am printing encryptPassword");
//   return false;
// };

// Function.prototype.changeUsername = function () {
//   console.log("I am printing changeUsername");
//   return true;
// };

// console.log(arr.encryptPassword());
// console.log(arr.changeUsername());

// QUESTION

function printInfo(name, age) {
  console.log(`Hello, my name is ${name}, and I am ${age} years old.`);
}

const person = {
  name: "John",
  age: "30",
};

const infoArray = ["Bob", 25];

printInfo.call(person.name, person.age);
printInfo.apply(person, infoArray);
