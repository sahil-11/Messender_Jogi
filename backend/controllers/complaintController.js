const User = require("../models/userModel");
const ErrorResponse = require("../utils/errorResponse");
const Hostel = require("../models/hostel");
const Complaint = require("../models/complaintModel");

exports.raiseComplaint = async (req, res, next) => {
  const Issue = req.body.issue;
  const UserId = req.body.userId;
  const UserName = req.body.userName;
  const HostelName = req.body.hostelName;
  // console.log(req.query);
  try {
    const complaint = await Complaint.create({
      issue: Issue,
      userId: UserId,
      userName: UserName,
      hostelName: HostelName,
    });

    await Hostel.findOneAndUpdate(
      { Name: HostelName },
      {
        $push: { complaints: complaint._id },
      }
    );

    await User.findByIdAndUpdate(UserId, {
      $push: { complaint: complaint._id },
    });

    res.status(201).json({
      success: true,
      complaint: complaint,
    });
  } catch (error) {
    next(error);
  }
};

exports.showComplaints = async (req, res, next) => {
  const hostelName = req.query.hostelName;
  try {
    const hostel = await Hostel.findOne({
      Name: hostelName,
    })
      .populate("complaints", [
        "issue",
        "userName",
        "upvotes",
        "downvotes",
        "status",
        "hostelName",
        "comments",
        "user",
      ])
      .exec();

    const statusFilter = req.query.status;
    let complaints;
    if (statusFilter === undefined) complaints = hostel.complaints;
    else
      complaints = hostel.complaints.filter(
        (obj) => obj.status == statusFilter
      );

    //////////  pagination
    let { pageIndex = 1, pageSize = 5 } = req.query;
    let count = complaints.length;
    let firstIndex = pageSize * (pageIndex - 1);
    let lastIndex = pageSize * pageIndex;
    lastIndex = Math.min(count, lastIndex);
    if (lastIndex < firstIndex) firstIndex = 0;

    const complaintData = complaints.slice(firstIndex, lastIndex);

    console.log(complaintData);
    res.status(200).json({ complaints: complaintData });
  } catch (error) {
    next(error);
  }
};

exports.showUserComplaints = async (req, res, next) => {
  const userId = req.query.userId;

  try {
    const user = await User.findById(userId)
      .populate("complaint", [
        "issue",
        "userName",
        "upvotes",
        "downvotes",
        "status",
        "hostelName",
        "comments",
        "user",
      ])
      .exec();
    console.log(user, "......");
    const statusFilter = req.query.status;
    let complaints;
    if (statusFilter === undefined) complaints = user.complaint;
    else
      complaints = user.complaint.filter((obj) => obj.status == statusFilter);

    //////////  pagination
    let { pageIndex = 1, pageSize = 5 } = req.query;
    let count = complaints.length;
    let firstIndex = pageSize * (pageIndex - 1);
    let lastIndex = pageSize * pageIndex;
    lastIndex = Math.min(count, lastIndex);
    if (lastIndex < firstIndex) firstIndex = 0;

    const complaintData = complaints.slice(firstIndex, lastIndex);

    console.log(complaintData);
    res.status(200).json({ complaints: complaintData });
  } catch (error) {
    next(error);
  }
};
