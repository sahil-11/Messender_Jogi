const express = require("express");
const router = express.Router();
const { raiseComplaint } = require("../controllers/complaintController");
const { isAuthenticated } = require("../middleware/auth");

const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});
const upload = multer({ storage: storage });
router.post("/hostel/raisecomplaint", isAuthenticated, raiseComplaint);

// use // /api/upload for uploading pictures while raisingComplaint
router.post("/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  console.log(file, file.filename);
  res.status(201).json(file.filename);
});

module.exports = router;
