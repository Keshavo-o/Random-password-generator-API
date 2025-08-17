const express = require("express");
const router = express.Router();
const {generate_token, verify_token} = require("../services/auth.js");
const generatePassword = require("../services/generate_random_strong_password.js");
const password = require("../models/password_model.js");


router
.route("/")
.get(async (req, res) => {
  const token = req.cookies.token;
  const user = verify_token(token);
  console.log("My user:", user);
  const all_passwords = await password.find({ createdBy: user.id });

 return res.render("password_home", { user, all_passwords });
})
.post(async (req, res) => {
  // Handle password logic here
  const user_object = req.body;
  my_password = generatePassword();
  console.log(user_object.userID)
  const my_new_password = {
    createdBy: user_object.userID,
    passwordfor: user_object.passwordfor,
    password: my_password
  }
  const token = req.cookies.token;
  const user = verify_token(token);
  await password.create(my_new_password);
  const all_passwords = await password.find({ createdBy: user_object.userID });
  // console.log("All passwords:", all_passwords);
 return res.render("password_home", { user, all_passwords });
});

module.exports = router;