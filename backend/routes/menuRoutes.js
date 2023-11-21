const express = require("express");
const router = express.Router();
const {
  addMenu,
  showMenu,
  updateMenu,
} = require("../controllers/menuController");
const { isAuthenticated } = require("../middleware/chiefauth");

router.post("/addmenu", isAuthenticated, addMenu);
router.get("/showmenu/:Hostel", showMenu);
router.patch("/updatemenu", isAuthenticated, updateMenu);

module.exports = router;
