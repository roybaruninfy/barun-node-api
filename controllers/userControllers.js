const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// @desc: register user  /api/users/register
const registerUsers = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("enter all the details of user for the registration");
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User already exists");
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  //console.log(hashedPassword);
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });
  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("User data is not valid");
  }
  res.json({ message: "user registered" });
});

// @desc: login user  /api/users/login
const loginUsers = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("all fields are mandatory");
  }
  const user = await User.findOne({ email });
  // bcrypt comparison
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      process.env.JWT_ACCESS_TOKEN,
      { expiresIn: "15m" }
    );
    res.status(200).json({ accessToken });
  } else {
    res.status(401);
    throw new Error("email or password is not valid");
  }
});

// @desc: get current user  /api/users/current
const currentUsers = asyncHandler(async (req, res) => {
  res.json(req.user);
});

module.exports = {
  registerUsers,
  loginUsers,
  currentUsers,
};
