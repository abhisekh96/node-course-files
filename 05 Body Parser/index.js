const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.urlencoded({ extended: false }));

app.use("/login", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.send("Welcome to my app.");
});

app.post("/login", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server is running at port 3000...");
})