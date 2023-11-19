const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const complaintSchema = new mongoose.Schema(
  {
    issue: {
      type: String,
      required: true,
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
    userId: {
      type: String,
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
    hostelName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Complaint", complaintSchema);
