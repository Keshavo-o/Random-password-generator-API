const users = require("../models/user_model.js");
const {generate_token, verify_token} = require("../services/auth.js");
async function handleloginuser(req, res) {
  const new_user_obj = req.body;
  const my_user = await users.findOne({username: new_user_obj.name, password: new_user_obj.password});
  // console.log(await users.find({}));
  // console.log(new_user_obj);
  if (my_user) {
    const token = generate_token(my_user);
    res.cookie("token", token);
    return res.redirect("./password");
  }
  return res.render("home",{message: "Invalid username or password"});
}
module.exports = { handleloginuser };