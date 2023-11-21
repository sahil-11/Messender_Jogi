const express = require("express");
const router = express.Router();
const { hostelallotment } = require("../controllers/hostelallotmentController");
const { isChief } = require("../middleware/chiefauth");

//auth routes
router.post("/hostelallotment", isChief, hostelallotment);

module.exports = router;
