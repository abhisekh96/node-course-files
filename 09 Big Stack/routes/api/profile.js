const express = require('express');
const router = express.Router();

router.use("/", (req, res) => {
  res.json({ profile: "Profile success" });
});

module.exports = router;