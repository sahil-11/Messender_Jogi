const express = require("express");
const router = express.Router();
const {
  addMenu,
  showMenu,
  updateMenu,
} = require("../controllers/menuController");
const { isAuthenticated } = require("../middleware/chiefauth");

router.post("/chief/addmenu", isAuthenticated, addMenu);
router.get("/chief/showmenu", showMenu);
router.patch("/chief/updatemenu", isAuthenticated, updateMenu);

module.exports = router;
