const express = require('express');
const app = express();

const myConsoleLog = function (req, res, next) {
  console.log("I am a middleware");
  next();
};

const serverTime = function (req, res, next) {
  req.requestTime = Date.now();
  next();
}

app.use(serverTime);

app.get("/", (req, res) => {
  res.send("Hello World");
  console.log("Hello World" + " and Time is: " + req.requestTime);
});

app.listen(3000, () => {
  console.log("Server is running at port 3000...");
});