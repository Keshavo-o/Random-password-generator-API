const mongoose = require ("mongoose");

const passwordSchema = new mongoose.Schema({
  createdBy: { type: String,default: null }, // Reference to the User who created the password,
  passwordfor: { type: String, required: true },
  password: { type: String, required: true },
});
// createdBy in your passwordSchema is a reference field that stores the _id of a user from the users collection.

// type: mongoose.Schema.Types.ObjectId → means it stores an ObjectId.

// ref: "User" → links it to the User model.

// So, every password document in the passwords collection will always be connected to the user who created it.

// 👉 In short: It creates a relationship between passwords and users (one user can have many passwords).

const Password = mongoose.model("Password", passwordSchema);
module.exports = Password;
