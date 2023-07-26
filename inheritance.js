// REFERENCE: https://www.codeproject.com/Articles/887551/Prototypal-Inheritance-in-JavaScript

// class User {
//   constructor(username) {
//     this.username = username;
//   }

//   logMe() {
//     console.log(`Username is ${this.username}`);
//   }
// }

// class Teacher extends User {
//   constructor(username, email, password) {
//     super(username); // what super does... ye dekhta konsa class extend kr rhe the
//     // ohh User class thi aur sath me this[context] le jaunga iss fn se aur wha username set krdunga aur value ho jayegi aur
//     // phir hum yha iss fn me username ko access kr payenge
//     this.email = email;
//     this.password = password;
//   }

//   addCoures() {
//     console.log(`A new couser was added by ${this.username}`);
//   }
// }

// const chai = new Teacher("chai", "chai@gmail.com", "123");
// chai.addCoures();

// const masalachai = new User(`masalachai`);

// masalachai.logMe();
// chai.logMe();

// console.log(chai instanceof User);

// let animal = {
//   eats: true,
//   walk: function () {
//     console.log("Animal walk");
//   },
// };

// let rabbit = {
//   jumps: true,
//   __proto__: animal,
// };

// let longEar = {
//   earLength: 10,
//   __proto__: rabbit,
// };

// let res = Object.getPrototypeOf(longEar);
// console.log("object:", res);

// // console.log(rabbit.eats);
// // console.log(rabbit.jumps);
// // rabbit.walk();

// longEar.walk();
// console.log(longEar.jumps);

// WRINTING DOESN'T USE PROTOTYPES:
// let animal = {
//   eats: true,
//   walk() {
//     console.log("I am in animal");
//   },
// };

// let rabbit = {
//   __proto__: animal,
// };

// rabbit.walk = function () {
//   console.log("Rabbit! Bounce-bounce!");
// };

// rabbit.walk();
// animal.walk();

// let user = {
//   name: "John",
//   surname: "Smith",

//   set fullName(value) {
//     [this.name, this.surname] = value.split(" ");
//   },

//   get fullName() {
//     return `${this.name} + ${this.surname}`;
//   },
// };

// let admin = {
//   __proto__: user,
//   isAdmin: true,
// };

// console.log(admin.fullName);

// admin.fullName = "Parteek kumar"; // creates a new object borrowing all properties and then changes

// console.log(admin.fullName);
// console.log(user.fullName);

// let animal = {
//   walk() {
//     if (this.isSleeping) {
//       console.log(`I walk`);
//       return true;
//     } else if (!this.isSleeping) {
//       console.log("I don't walk");
//       return false;
//     }
//   },
//   sleep() {
//     this.isSleeping = false;
//     let res = "i am response";
//     return res;
//   },
// };

// let rabbit = {
//   name: "White rabbit",
//   __proto__: animal,
// };

// rabbit.sleep();

// console.log(rabbit.isSleeping);
// rabbit.isSleeping = true;
// console.log(rabbit.isSleeping);
// console.log(rabbit.walk());
// console.log(animal.sleep());

// // SECTION
// let animal = {
//   eats: true,
// };

// let rabbit = {
//   jumps: true,
//   __proto__: animal,
// };

// console.log(Object.keys(rabbit));
// for (let prop in rabbit) {
//   console.log(prop);
// }

// // FILTER OUT OWN and INHERITED properties
// for (let prop in rabbit) {
//   let isOwn = rabbit.hasOwnProperty(prop);

//   if (isOwn) {
//     console.log(`Our: ${prop}`);
//   } else {
//     console.log(`Inherited: ${prop}`);
//   }
// }

// PRACTICE: 1
// let animal = {
//   jumps: null,
// };

// let rabbit = {
//   __proto__: animal,
//   jumps: true,
// };

// console.log(rabbit.jumps); // true

// delete rabbit.jumps;

// console.log(rabbit.jumps); // null

// delete animal.jumps;

// console.log(rabbit.jumps); // undefined

//PRACTICE: 2

// IT WILL BE FASTER TO GET head.glasses as compared to pockets.glasses
// let head = {
//   glasses: 1,
// };

// let table = {
//   pen: 3,
//   __proto__: head,
// };

// let bed = {
//   sheet: 1,
//   pillow: 2,
//   __proto__: table,
// };

// let pockets = {
//   money: 2000,
//   __proto__: bed,
// };

// console.log(pockets.pen);
// console.log(bed.glasses);
// console.log(table.money);

// PRACTICE 3
// where does it write
// let animal = {
//   eat() {
//     this.full = true;
//     return true;
//   },
// };
// let rabbit = {
//   __proto__: animal,
// };
// rabbit.eat();

// PRACTICE 4

// let hamster = {
//   stomach: [],
//   eat(food) {
//     // this.stomach.push(food); // finds first in speedy object... not finds then go to prototypical chain and finds in the hamster object then
//     this.stomach = [food];
//   },
// };

// let speedy = {
//   __proto__: hamster,
//   // stomach: [],
// };

// let lazy = {
//   __proto__: hamster,
//   // stomach: [],
// };

// speedy.eat("apple");
// console.log(speedy.stomach);

// lazy.eat("banana");
// console.log(lazy.stomach);
