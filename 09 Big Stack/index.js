const express = require('express');
const mongoose = require('mongoose');

const app = express();

// MongoDB configuration
const db = require("./setup/myurl").mongoURL;

// Connect to database
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => { console.log("MongoDB connected successfully.") })
  .catch(err => { console.log(err) });

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hey there Big stack.");
});

app.listen(port, () => console.log(`Server is running at ${port}`));