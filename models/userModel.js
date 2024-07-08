const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "please add the username"],
    },
    email: {
      type: String,
      required: [true, "please enter email id"],
      unique: [true, "email address already taken"],
    },
    password: {
      type: String,
      required: [true, "please enter password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
