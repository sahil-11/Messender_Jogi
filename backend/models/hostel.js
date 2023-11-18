const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const hostelSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
    },
    users: [
      {
        type: ObjectId,
        ref: "User",
        required: true,
      },
    ],
    complaints: [
      {
        type: ObjectId,
        ref: "Complaint",
        required: true,
      },
    ],
    accountant: {
      type: ObjectId,
      ref: "Accountant",
      // required: true,
    },

    meals: [
      {
        type: ObjectId,
        ref: "DailyMeal",
        required: true,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Hostel", hostelSchema);
