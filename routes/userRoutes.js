const express = require("express");
const {
  registerUSer,
  loginUser,
  currentUser,
} = require("../controllers/userController");

const router = express.Router();

router.post("/register", registerUSer);

router.post("/login", loginUser);

router.get("/current", currentUser);

module.exports = router;
