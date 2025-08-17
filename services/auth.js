const jwt = require("jsonwebtoken");
const secret_key = "Keshav@123"
function generate_token(user) {
    const payload = {
        id: user._id,
        username: user.username
    };
  const token = jwt.sign(payload, secret_key);
  return token;
}
function verify_token(token) {
    try {
        const decoded = jwt.verify(token, secret_key);
        return decoded;
    } catch (error) {
        return null;
    }
}
module.exports = { generate_token, verify_token };