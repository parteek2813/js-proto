// let obj = {};
// // console.log(obj);

// console.log(obj.__proto__ === Object.prototype);
// console.log(obj.toString === obj.__proto__.toString);
// console.log(obj.toString === Object.prototype.toString);

// console.log(Object.prototype.__proto__);

// let arr = [1, 2, 3];

// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__ === Object.prototype);
// console.log(arr.__proto__.__proto__.__proto__ === null);

// FUNCTION NATIVE:
// function f() {}

// console.log(f.__proto__ === Function.prototype);
// console.log(f.__proto__.__proto__ === Object.prototype);

// STRING
// let s = "Hello";

// console.log(s.__proto__ === String.prototype);
// console.log(s.__proto__.__proto__ === Object.prototype);
// console.log(s.__proto__.__proto__.__proto__ === null);

// CHANGING NATIVE PROTOTYPE:

// String.prototype.show = function () {
//   console.log(this);
// };

// "HELLO!".show();

// APT USAGE FOR MODIFYING NATIVE PROTOTYPE:
// if (!String.prototype.repeat) {
//   String.prototype.repeat = function (n) {
//     return new Array(n + 1).join(this);
//   };
// }

// String.prototype.hello = function (n) {
//   return new Array(n + 1).join(this);
// };

// const a = "Hello".repeat(3);
// const b = "Hello".hello(3);

// if (a === b) {
//   console.log("Equal");
// } else {
//   console.log("not equal");
// }

// BORROWING FROM PROTOTYPES:
// let obj = {
//   0: "Hello",
//   1: "world!",
//   length: 2,
// };

// // obj.join = Array.prototype.join;
// obj.__proto__ = Array.prototype; // But we only can inherit from one object at a time

// console.log(obj.join(","));

// PRACTICE 1

// function f() {
//   console.log("Hello");
// }

// Function.prototype.defer = function (time) {
//   // OPTION 1
//   //   setTimeout(() => {
//   //     console.log(this());
//   //   }, 1000);
//   // OPTION 2
//   //   setTimeout(this, time);
// };

// f.defer(1000);

// // PRACTICE 2
// Function.prototype.defer = function (ms) {
//   let f = this;
//   console.log(f);
//   return function (...args) {
//     setTimeout(() => f.apply(this, args), ms);
//   };
// };

// let user = {
//   name: "Parteek",
//   sayHi() {
//     console.log(this.name);
//   },
// };

// user.sayHi = user.sayHi.defer(1000);
// user.sayHi();

// function f(a, b) {
//   console.log(a + b);
// }

// f.defer(1000)(1, 2);

// Function.prototype.defer = function (ms) {
//   let f = this;
//   return function (a, b) {
//     setTimeout(() => this(a, b), ms);
//   }.bind(this);
// };

// // check it
// function f(a, b) {
//   console.log(a + b);
// }

// f.defer(1000)(1, 2);
