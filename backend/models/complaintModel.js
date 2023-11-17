const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const complaintSchema = new mongoose.Schema(
  {
    issue: {
      type: String,
    },
    upvotes: {
      type: Map,
      of: Boolean,
    },
    downvotes: {
      type: Map,
      of: Boolean,
    },
    status: {
      type: Boolean,
      default: 0,
    },
    user: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    userName: {
      // name of the guy who raised the complaint;
      type: String,
      required: true,
    },
    comments: [
      {
        type: ObjectId,
        ref: "Comment",
        // required: true,
      },
    ],
    hostel: {
      type: ObjectId,
      ref: "Hostel",
      required: true,
    },
    hostelName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Complaint", complaintSchema);
