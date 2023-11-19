const express = require("express");
const router = express.Router();
const {
  addcomment,
  showcomment,
  deleteComment,
} = require("../controllers/commentController");
const { isAuthenticated } = require("../middleware/auth");

router.post("/comment/:complaintID", isAuthenticated, addcomment);
router.get("/comment/:complaintID", isAuthenticated, showcomment);
router.delete("/delete/comment/:commentID", isAuthenticated, deleteComment);

module.exports = router;
