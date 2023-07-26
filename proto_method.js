// OBJECT .create PRototype

// let animal = {
//   eats: true,
// };

// let rabbit = Object.create(animal);

// console.log(rabbit.eats);
// console.log(Object.getPrototypeOf(rabbit) === animal);
// Object.setPrototypeOf(rabbit, {});

// console.log(rabbit);

// PROPERTIES
// let animal = {
//   eats: true,
// };
// let rabbit = Object.create(animal, {
//   jumps: {
//     value: true,
//   },
//   eatAgain: {
//     value: false,
//   },
// });
// // console.log(rabbit.jumps); // true
// console.log(rabbit.eatAgain); // true
// console.log(rabbit.eats); // false

// let clone = Object.create(
//   Object.getPrototypeOf(rabbit),
//   Object.getOwnPropertyDescriptors(rabbit)
// );

// console.log(Object.getPrototypeOf(rabbit)); // { eats: true }
// console.log(Object.getOwnPropertyDescriptors(rabbit));
// let a = Object.getOwnPropertyDescriptors(rabbit).eatAgain.writable;
// console.log(a); // false
// console.log(Object.getOwnPropertyDescriptor(rabbit));
// console.log(clone);

// CHANGING PROPERTY DESC
// let animal = {
//   eats: true,
// };

// let rabbit = Object.create(animal, {
//   jumps: {
//     value: true,
//     writable: true,
//     enumerable: true,
//     configurable: true,
//   },
//   eatAgain: {
//     value: false,
//     writable: true,
//     enumerable: true,
//     configurable: true,
//   },
// });

// console.log(Object.getOwnPropertyDescriptor(rabbit, "jumps"));
// console.log(Object.getOwnPropertyDescriptor(rabbit, "eatAgain"));

// let obj = {};

// let key = prompt("What's the key?", "__proto__");
// obj[key] = "some value";

// console.log(obj[key]);

// USING MAP
// let map = new Map();
// let key = "__proto__";
// map.set(key, "some value");
// console.log(map.get(key));

// let obj = Object.create(null);
// let key = "__proto__";
// obj[key] = "some value";
// console.log(obj[key]);
// console.log(obj);

// DRAWBACK:

// let obj = Object.create(null); // prototype is null here
// let animal = {
//   eats: true,
// };
// console.log(obj); //[Object: null prototype] {}
// console.log(animal.toString()); //[object Object]
// console.log(Object.toString(obj)); // function Object() { [native code] }

// let food = {
//   eats: true,
// };
// let chinese = Object.create(food);
// console.log(chinese.__proto__); // { eats: true }

// let chinese = Object.create(null);
// chinese.hello = "Helloo";
// chinese.bye = "byee";
// console.log(chinese); // [Object: null prototype] { hello: 'Helloo', bye: 'byee' }
// console.log(Object.keys(chinese));

// METHOD 1 USING LITERAL SYNTAX = { __proto__: ... }
// let animal = {
//   eats: true,
//   __proto__: {
//     hello: true,
//     bye: false,
//   },
// };

// console.log(animal.__proto__);

// METHOD 2 USING OBJECT.CREATE
// const person = {
//   isHuman: false,
//   printIntro: function () {
//     console.log(`My name is ${this.name}. Am i human? ${this.isHuman}`);
//   },
// };

// const me = Object.create(person); // assigning the prototype of me object as person
// me.name = "Parteek";
// me.isHuman = true;
// me.printIntro();
// console.log(me);
// console.log(person);

// OR

// const person = {
//   isHuman: false,
//   printIntro: function () {
//     console.log(`My name is ${this.name}. Am i human? ${this.isHuman}`);
//   },
// };

// // USING 2nd argu as descriptors
// const me = Object.create(person, {
//   name: {
//     value: "Parteek",
//   },
//   isHuman: {
//     value: true,
//   },
// });

// me.printIntro();

// PRACTICE 1:

// let dictionary = Object.create(null, {
//   toString: {
//     // define toString property
//     value() {
//       // the value is a function
//       return Object.keys(this).join();
//     },
//   },
// });

// dictionary.apple = "Apple";
// dictionary.__proto__ = "test";

// for (let key in dictionary) {
//   console.log(key);
// }

// console.log(dictionary.toString()); // "apple,__proto__"

// PRACTICE 2

// function Rabbit(name) {
//   this.name = name;
// }
// Rabbit.prototype.sayHi = function () {
//   console.log(this.name);
// };
// let rabbit = new Rabbit("rabbit");

// console.log(rabbit.sayHi());
// console.log(Rabbit.prototype.sayHi());
// console.log(Object.getPrototypeOf(rabbit)); // { sayHi: [Function (anonymous)] }
// console.log(Object.getPrototypeOf(rabbit).sayHi());
// rabbit.__proto__.sayHi(); // undefined
