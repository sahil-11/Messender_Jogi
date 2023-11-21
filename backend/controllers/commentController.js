const Complaint = require("../models/complaintModel");
const User = require("../models/userModel");
const Comment = require("../models/comment");

exports.addcomment = async (req, res, next) => {
  const comment = req.body.comment;
  const userID = req.body._id;
  const complaintID = req.params.complaintID;
  const userName = req.body.firstName + " " + req.body.lastName;
  try {
    const new_comment = await Comment.create({
      comment: comment,
      userName: userName,
      user: userID,
      complaint: complaintID,
    });

    await Complaint.findByIdAndUpdate(complaintID, {
      $push: { comments: new_comment._id },
    });

    res.status(201).json({
      success: true,
      comment: new_comment,
    });
  } catch (error) {
    next(error);
  }
};

exports.showcomment = async (req, res, next) => {
  const complaintID = req.params.complaintID;

  try {
    const complaint = await Complaint.findById(complaintID)
      .populate("comments", ["comment", "userName"])
      .exec();

    let comments = complaint.comments;
    console.log(complaint);
    res.status(200).json({
      success: true,
      comments: comments,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteComment = async (req, res, next) => {
  const commentId = req.params.commentID;
  const comment = await Comment.findById(commentId)
    .populate("user")
    .populate("complaint")
    .exec();
  console.log(comment);
  if (req.user._id.toString() !== comment.user._id.toString())
    next(new ErrorResponse("Not authorized to delete this comment", 400));
  const complaintID = comment.complaint._id;
  try {
    await Complaint.findByIdAndUpdate(complaintID, {
      $pull: { comments: commentId },
    });

    await Comment.findByIdAndDelete(commentId);

    res.status(200).json({ success: true, message: "Deletion successfull" });
  } catch (error) {
    next(error);
  }
};
