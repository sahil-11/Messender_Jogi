const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const hostelallotmentSchema = new mongoose.Schema(
  {
    RegistrationNumber: {
      type: Number,
      required: true,
      index: { unique: true, sparse: true },
    },
    HostelID: {
      type: ObjectId,
      ref: "Hostel",
      required: true,
    },
    Hostel: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Hostelallotment", hostelallotmentSchema);
