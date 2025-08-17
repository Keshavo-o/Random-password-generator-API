const express = require("express");
const router = express.Router();
const users = require("../models/user_model.js");
const {handleloginuser} = require("../controllers/user_controllers.js");

router
.route("/")
.get((req, res) => {
 return res.render("home");
})
.post(handleloginuser);
router
.route("/signup")
.get((req, res) => {
 return res.render("signup");
})
.post((req, res) => {
  const new_user_obj = req.body;
  const new_user = {
  username: new_user_obj.username,
  password: new_user_obj.password
  }
  users.create(new_user);
  return res.render("home");
});
module.exports = router;