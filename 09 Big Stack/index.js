const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const passport = require('passport');

const auth = require('./routes/api/auth');
const questions = require('./routes/api/questions');
const profile = require('./routes/api/profile');

const app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// MongoDB configuration
const db = require("./setup/myurl").mongoURL;

// Connect to database
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => { console.log("MongoDB connected successfully.") })
  .catch(err => { console.log(err) });

const port = process.env.PORT || 3000;

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Config for JWT Strategy
require('./strategies/jsonwtStrategy')(passport);

// Testing Routes
app.get("/", (req, res) => {
  res.send("Hey there Big stack.");
});

// Actual Routes
app.use("/api/auth", auth);
app.use("/api/questions", questions);
app.use("/api/profile", profile);

app.listen(port, () => console.log(`Server is running at ${port}`));