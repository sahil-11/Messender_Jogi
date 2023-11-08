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
    raisedOn: {
      type: Date,
    },
    status: {
      type: Boolean,
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
    hostel: {
      type: ObjectId,
      ref: "Hostel",
    },

    // relations to be related : hostel, complaints
    role: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Complaint", complaintSchema);
