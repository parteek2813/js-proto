// class User {
//   constructor(username) {
//     this.username = username;
//   }

//   logMe() {
//     console.log(`Username: ${this.username}`);
//   }

//   static createId() {
//     // static keyword restricts the object created using this class as an instance to call this method
//     return `123`;
//   }
// }

// const parteek = new User("parteek");
// // console.log(parteek.createId());

// class Teacher extends User {
//   constructor(username, email) {
//     super(username);
//     this.email = email;
//   }
// }

// const iphone = new Teacher("iphone", "i@b.com");

// iphone.logMe();
// // iphone.createId();

// BEHIND THE SCENES:

function User(username) {
  this.username = username;
}

User.prototype.logMe = function () {
  console.log(`Username: ${this.username}`);
};

User.prototype.createId = function () {
  return "123";
};

const parteek = new User("parteek");

parteek.logMe();
// console.log(User.createId());
console.log(User.logMe()); // can't acces the own function defined in the prototype but instance of this Object can[ in this case iphon]

function Teacher(username, email) {
  User.call(this, username);
  this.email = email;
}

Teacher.prototype = Object.create(User.prototype);
// Teacher.___proto__ = User; // TODO

Teacher.prototype.contructor = Teacher;

const iphone = new Teacher("iphone", "i@b.com");

console.log(Teacher.createId());

console.log(iphone instanceof User);
console.log(iphone instanceof Teacher);
