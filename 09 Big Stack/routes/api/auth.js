const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jsonwt = require('jsonwebtoken');
const passport = require('passport');
const key = require('../../setup/myurl');

router.get("/", (req, res) => {
  res.json({ test: "Auth is successful." });
});

const person = require('../../models/Person');

router.post("/register", (req, res) => {
  person.findOne({ email: req.body.email })
    .then(person => {
      if (person) {
        return res.status(400).json({ emailerror: "Email is already registered." });
      } else {
        const newPerson = new Person({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        });
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newPerson.password, salt, (err, hash) => {
            if (err) {
              throw err;
            } else {
              newPerson.password = hash;
              newPerson
                .save()
                .then(person => res.json(person))
                .catch(err => console.log(err));
            }
          })
        })
      }
    })
    .catch(err => console.log(err));
});

module.exports = router;