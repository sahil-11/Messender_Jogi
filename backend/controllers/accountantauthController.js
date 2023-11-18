const Accountant = require("../models/accountant");
const ErrorResponse = require("../utils/errorResponse");

exports.signup = async (req, res, next) => {
  const { email } = req.body;
  const AccountantExist = await Accountant.findOne({ email });
  if (AccountantExist) {
    return next(new ErrorResponse("E-mail already registred", 400));
  }

  try {
    const Accountant = await Accountant.create(req.body);
    sendTokenResponse(Accountant, 200, res);
  } catch (error) {
    next(error);
  }
};

exports.signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email) {
      return next(new ErrorResponse("Please add an email", 403));
    }
    if (!password) {
      return next(new ErrorResponse("Please add a password", 403));
    }

    //check Accountant email
    const Accountant = await Accountant.findOne({ email });
    if (!Accountant) {
      return next(new ErrorResponse("Invalid credentials", 400));
    }
    //check password
    const isMatched = await Accountant.comparePassword(password);
    if (!isMatched) {
      return next(new ErrorResponse("Invalid credentials", 400));
    }

    sendTokenResponse(Accountant, 200, res); // sending token for session management :
  } catch (error) {
    next(error);
  }
};

const sendTokenResponse = async (Accountant, codeStatus, res) => {
  const token = await Accountant.getJwtToken();
  res
    .status(codeStatus)
    .cookie("token", token, { maxAge: 60 * 60 * 1000, httpOnly: true }) //defining default maxAge of a cookie :
    .json({ success: true, token, Accountant });
};

// log out
exports.logout = (req, res, next) => {
  res.clearCookie("token");
  res.status(200).json({
    success: true,
    message: "logged out",
  });
};

// Accountant profile
exports.AccountantProfile = async (req, res, next) => {
  const Accountant = await Accountant.findById(req.Accountant.id).select(
    "-password"
  );

  res.status(200).json({
    success: true,
    Accountant,
  });
};
