const express = require("express");
const router = express.Router();
const {
  addcomment,
  showcomment,
  deleteComment,
} = require("../controllers/commentController");
const { isAuthenticated } = require("../middleware/auth");

router.post("/comment/:complaintID",  addcomment);
router.get("/comment/:complaintID",  showcomment);
router.delete("/delete/comment/:commentID", isAuthenticated, deleteComment);

module.exports = router;
