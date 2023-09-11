// fetch("https://dummyjson.com/products/1")
//   .then((res) => res.json())
//   .then((json) => console.log(json));

// PROMISE 1
const promiseOne = new Promise(function (resolve, reject) {
  // any async task
  // db calls , cryptography, network
  setTimeout(function () {
    console.log("Async task completed");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise Consumed");
});

// PROMISE 2
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2 ");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async task 2 consumed");
});

// PROMISE 3
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "HEllo@gmail.com", password: "1213123" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

// PROMISE 4
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "parteek@gmail.com", password: "123" });
    } else {
      reject("ERROR: WENT WRONG");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    console.log("Finally promise is either resolved or rejected");
  });

// PROMISE 5

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "js@gmail.com", password: "123" });
    } else {
      reject("ERROR: JS WENT WRONG");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

//  PROMISE 6

// METHOD 1
const getAllUsers = async function () {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("E: ", error);
  }
};

getAllUsers();
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(function (response) {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
