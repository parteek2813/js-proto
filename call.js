function SetUsername(username) {
  // complex db calls;
  this.username = username;
  console.log("Called");
}

function createUser(username, email, password) {
  SetUsername.call(this, username); // calling but not passsing reference of current execution context

  this.email = email;
  this.password = password;
}

const chai = new createUser("chai", "chai@google.com", "123");
console.log(chai);
