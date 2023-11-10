const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const dailyMealSchema = new mongoose.Schema(
  {
    breakfast: {
      type: [String],
    },
    lunch: {
      type: [String],
    },
    eveningSnacks: {
      type: [String],
    },
    dinner: {
      type: [String],
    },
    day: {
      type: Number, // 0 -> 6 (Monday -> Sunday)
    },
    HostelID: {
      type: ObjectId,
      ref: "Hostel",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("DailyMeal", dailyMealSchema);
