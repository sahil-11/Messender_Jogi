const express = require("express");
const router = express.Router();
const {
  signup,
  signin,
  logout,
} = require("../controllers/chiefauthController");
const { isAuthenticated } = require("../middleware/chiefauth");

//auth routes
// /api/signup
router.post("/chief/signup", signup);
// /api/signin
router.post("/chief/signin", signin);
// /api/logout
router.get("/chief/logout", logout);

module.exports = router;
