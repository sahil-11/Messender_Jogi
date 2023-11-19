const User = require("../models/userModel");
const ErrorResponse = require("../utils/errorResponse");
const Hostelallotment = require("../models/hostelallotment");
const Hostel = require("../models/hostel");
// exports.signup = async (req, res, next) => {
  
//   const { email } = req.body;
//   const userExist = await User.findOne({ email });
//   if (userExist) {
//     return next(new ErrorResponse("E-mail already registred", 400));
//   }
//   try {
//     const registrationNumber = req.body.RegistrationNumber;
//     const allotmentDetails = await Hostelallotment.findOne({
//       RegistrationNumber: registrationNumber,
//     });
//     if (allotmentDetails == "") {
//       return next(new ErrorResponse("Student is not registered!", 400));
//     }

//     const hostelID = allotmentDetails.HostelID;
//     // console.log(hostelID, registrationNumber);

//     const user = await User.create({
//       ...req.body,
//       HostelID: hostelID,
//       Hostel: allotmentDetails.Hostel,
//     });

//     await Hostel.findByIdAndUpdate(hostelID, {
//       $push: { users: user._id },
//     });

//     sendTokenResponse(user, 200, res);
//   } catch (error) {
//     next(error);
//   }
// };
exports.signup = async (req, res, next) => {
  const { email } = req.body;
  const userExist = await User.findOne({ email });
  if (userExist) {
    return next(new ErrorResponse("E-mail already registred", 400));
  }
  try {
    const registrationNumber = req.body.RegistrationNumber;
    // const allotmentDetails = await Hostelallotment.findOne({
    //   RegistrationNumber: registrationNumber,
    // });
    // if (allotmentDetails == "") {
    //   return next(new ErrorResponse("Student is not registered!", 400));
    // }

    const hostel = Hostel.findOne({Name: "Tandon"}).exec();
    const hostelID = hostel._id ;
    // console.log(hostelID, registrationNumber);

    const user = await User.create({
      ...req.body,
      HostelID: hostelID,
      Hostel: "Tandon",
    });

    await Hostel.findByIdAndUpdate(hostelID, {
      $push: { users: user._id },
    });

    sendTokenResponse(user, 200, res);
  } catch (error) {
    next(error);
  }
};

exports.signin = async (req, res, next) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;
    //validation
    if (!email) {
      return next(new ErrorResponse("Please add an email", 403));
    }
    if (!password) {
      return next(new ErrorResponse("Please add a password", 403));
    }

    //check user email
    const user = await User.findOne({ email });
    if (!user) {
      return next(new ErrorResponse("Invalid credentials", 400));
    }
    //check password
    const isMatched = await user.comparePassword(password);
    if (!isMatched) {
      return next(new ErrorResponse("Invalid credentials", 400));
    }

    sendTokenResponse(user, 200, res); // sending token for session management :
  } catch (error) {
    next(error);
  }
};

const sendTokenResponse = async (user, codeStatus, res) => {
  const token = await user.getJwtToken();
  res
    .status(codeStatus)
    .cookie("token", token, { maxAge: 60 * 60 * 1000, httpOnly: true }) //defining default maxAge of a cookie :
    .json({ success: true, token, user });
};

// log out
exports.logout = (req, res, next) => {
  res.clearCookie("token");
  res.status(200).json({
    success: true,
    message: "logged out",
  });
};

// user profile
exports.userProfile = async (req, res, next) => {
  const user = await User.findById(req.user.id).select("-password");

  res.status(200).json({
    success: true,
    user,
  });
};
