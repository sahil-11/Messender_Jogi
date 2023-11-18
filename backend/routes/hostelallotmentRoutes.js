const express = require("express");
const router = express.Router();
const { hostelallotment } = require("../controllers/hostelallotmentController");
const { isAuthenticated } = require("../middleware/chiefauth");

//auth routes
router.post("/hostelallotment", isAuthenticated, hostelallotment);

module.exports = router;

