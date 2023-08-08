const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

//@desc Register all users
//@route POST/api/users/register
//@access public
const registerUSer = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(404);
    throw new Error("All feilds are required");
  }
  const userAvailables = await User.findOne({ email });
  if (userAvailables) {
    res.status(404);
    throw new Error("User already registered");
  }
  //Hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword);
  const user = await User.create({
    username,
    email,
    password,
  });

  console.log(`user created ${user}`);
  if (user) {
    res.status(200).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("user data is not valid");
  }
  res.json({ message: "Register the user" });
});

//@desc Login User
//@route POST/api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: " login user" });
});

const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "current user information" });
});

module.exports = { registerUSer, loginUser, currentUser };
