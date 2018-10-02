const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("<h1>I am about page</h1>");
});

app.post("/login", (req, res) => {
  res.send("Login successful");
});

app.delete("/delete", (req, res) => {
  res.send("Delete successful");
});

app.get("/about-us", (req, res) => {
  res.send("about-us page");
});

app.get("/ab*cd", (req, res) => {
  res.send("It is a regular expression page.");
});

app.get("/user/:id/status/:status_id", (req, res) => {
  res.send(req.params);
});

app.get("/flights/:from-:to", (req, res) => {
  res.send(req.params);
});

app.get("/user", (req, res) => {
  res.json({ user: "Abhisek", balance: "2000" });
});

app.get("/error", (req, res) => {
  res.send({ error: "Something went wrong." });
});



app.listen(3000, () => console.log("Server is running at port 3000..."));