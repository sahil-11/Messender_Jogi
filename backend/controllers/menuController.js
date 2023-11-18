const Chief = require("../models/chiefWarden");
const Hostel = require("../models/hostel");
const ErrorResponse = require("../utils/errorResponse");
const DailyMeal = require("../models/dailyMeal");

exports.addMenu = async (req, res, next) => {
  const hostelName = req.body.hostel;
  const day = Number(req.body.day);
  try {
    const hostel = await Hostel.findOne({ Name: hostelName });
    if (!hostel)
      res.status(400).json({
        success: false,
        message: "No hostel with the given name",
      });

    await DailyMeal.findOneAndDelete({
      day: day,
      hostelName: hostelName,
    }).exec();

    const meal = await DailyMeal.create({
      ...req.body,
      hostelName: hostelName,
    });
    if (!hostel.meals) {
      hostel.meals = new Array(7);
    }
    hostel.meals[day] = meal;
    await hostel.save();
    console.log(meal);
    res.status(201).json({
      success: true,
      meals: meal,
    });
  } catch (error) {
    next(error);
  }
};

exports.showMenu = async (req, res, next) => {
  const hostelName = req.body.Hostel;
  const queryDay = req.body.day;
  console.log(hostelName, queryDay);
  try {
    const hostel = await Hostel.findOne({ Name: hostelName })
      .populate("meals")
      .exec();
    if (!hostel.meals) {
      hostel.meals = new Array(7);
    }

    const meal = hostel.meals[queryDay];
    try {
      res.status(201).json({
        success: true,
        meal: meal,
        Hostel: hostelName,
        day: queryDay,
      });
    } catch (error) {
      next(error);
    }
  } catch (error) {
    next(error);
  }
};

exports.updateMenu = async (req, res, next) => {
  const day = Number(req.body.day);

  const hostelName = req.body.hostel;
  try {
    const hostel = await Hostel.findOne({ Name: hostelName })
      .populate("meals")
      .exec();

    await DailyMeal.findOneAndDelete({
      day: day,
      hostelName: hostelName,
    }).exec();

    console.log("...........");
    const meal = await DailyMeal.create({
      ...req.body,
      hostelName: hostelName,
    });

    hostel.meals[day] = meal;
    await hostel.save();
    res.status(201).json({
      success: true,
      meal: meal,
      Hostel: hostelName,
      day: day,
    });
  } catch (error) {
    next(error);
  }
};
