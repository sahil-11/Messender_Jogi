const express = require("express");
const router = express.Router();
const {
  addMenu,
  showMenu,
  updateMenu,
} = require("../controllers/menuController");
const { isChief } = require("../middleware/chiefauth");

router.post("/addmenu", isChief, addMenu);
router.get("/showmenu/:Hostel", showMenu);
router.patch("/updatemenu", isChief, updateMenu);

module.exports = router;
