const express = require("express");
const router = express.Router();

/* GET users listing. */
//http://localhost:3000/users
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

//http://localhost:3000/users/cool
router.get("/cool", function (req, res, next) {
  res.send("You're so cool");
});

module.exports = router;
