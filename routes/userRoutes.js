const express = require("express");
const {
  registerUsers,
  loginUsers,
  currentUsers,
} = require("../controllers/userControllers");
const validateToken = require("../middlewares/validateTokenHandler");
const router = express.Router();
// all user routes
router.post("/register", registerUsers);
router.post("/login", loginUsers);
router.get("/current", validateToken, currentUsers);

module.exports = router;
