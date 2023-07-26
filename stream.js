var fs = require("fs");
var events = require("events");
var eventEmitter = new events.EventEmitter();

var myEventHandler = function () {
  console.log("I heard a scream");
  myEventHandler2();
};

var myEventHandler2 = function () {
  console.log("I heard a scream again");
};

eventEmitter.on("scream", myEventHandler);

eventEmitter.emit("scream");

// var rs = fs.createReadStream("./bbind.html");
// rs.on("open", function () {
//   console.log("The file is open");
// });
