const express = require("express");
const router = express.Router();
const {
  signup,
  signin,
  logout,
} = require("../controllers/accountantauthController");
const { isAuthenticated } = require("../middleware/accountantauth");

//auth routes
// /api/signup
router.post("/accountant/signup", signup);
// /api/signin
router.post("/accountant/signin", signin);
// /api/logout
router.get("/accountant/logout", logout);

module.exports = router;
