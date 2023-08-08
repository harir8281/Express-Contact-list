const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  { 
    username: {
      type: String,
      required: [true, "please add the username"],
    },
    email: {
      type: String,
      required: [true, "please add the user email"],
      unique: [true, "Email address is already in use"],
    },
    password: {
      type: String,
      required: [true, "please add the user password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
