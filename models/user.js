const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "User must have a name"],
    unique: false,
    validate: [validator.isAlpha, "name should be alpha only"],
  },
  email: {
    type: String,
    required: [true, "User must have an email"],
    unique: [true, "Email must be unique"],
  },
  type: {
    type: String,
    enum: ["customer", "seller"],
  },
  password: {
    type: String,
    required: [true, "User must have a password"],
    minlength: [8, "Password must have length 8"],
  },
});

const User = mongoose.model("users", userSchema);

module.exports = User;
