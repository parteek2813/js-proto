function logName() {
  console.log("Name:", this.name);
}

const person = {
  name: "John",
};

const hello = {
  name: "Parteek",
};

function bindNameLogger() {
  //   const boundLogName = logName.bind(person); // Name: John
  const boundLogName = logName.bind(hello); // Name: Parteek
  boundLogName();
}

bindNameLogger();

// THIS CODE WILL ALSO WORK
// const boundLogName = logName.bind(hello);
// boundLogName(); //Name: Parteek
