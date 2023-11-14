const User = require("../models/userModel");
const ErrorResponse = require("../utils/errorResponse");
const Hostel = require("../models/hostel");
const Complaint = require("../models/complaintModel");

exports.raiseComplaint = async (req, res, next) => {
  const Issue = req.body.issue;
  const UserId = req.body.userId;
  const UserName = req.body.userName;
  const HostelID = req.params.hostelID;

  try {
    const complaint = await Complaint.create({
      //   ...req.body,
      issue: Issue,
      user: UserId,
      userName: UserName,
      hostel: HostelID,
    });

    res.status(201).json({
      success: true,
      complaint: complaint,
    });
  } catch (error) {
    next(error);
  }
};
