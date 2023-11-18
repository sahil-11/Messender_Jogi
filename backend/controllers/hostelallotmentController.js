const Chief = require("../models/chiefWarden");
const User = require("../models/userModel");
const Hostel = require("../models/hostel");
const Hostelallotment = require("../models/hostelallotment");
const ErrorResponse = require("../utils/errorResponse");

exports.hostelallotment = async (req, res, next) => {
  const registrationNumber = req.body.RegistrationNumber;
  const hostel = req.body.Hostel;
  const hostelID = await Hostel.findOne({ Name: hostel });

  try {
    const student_to_be_added = await Hostelallotment.create({
      RegistrationNumber: registrationNumber,
      HostelID: hostelID,
      Hostel: hostel,
    });
    res.status(200).json({
      success: true,
      student_to_be_added,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
