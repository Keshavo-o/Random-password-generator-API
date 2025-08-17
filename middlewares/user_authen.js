const users = require("../models/user_model.js");
const {generate_token, verify_token} = require("../services/auth.js");

async function checkauthentication(req, res, next){
console.log("Checking authentication...");
const token = req.cookies.token;//if you are reading cookie you need to parse in index.js also
if (!token) {
    return res.render("home", { message: "Unauthorized" });
}
const decoded = verify_token(token);
if (!decoded) {
    return res.render("home", { message: "Unauthorized" });
}
req.user = decoded;
next();
}
module.exports = checkauthentication;