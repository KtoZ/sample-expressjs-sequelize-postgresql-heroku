var express = require("express");
var router = express.Router();
let db = require("../models/index");

/* GET users listing. */
router.get("/", function (req, res, next) {
  db.user.findAll({}).then((users) => {
    res.send(users);
  });
});

module.exports = router;
