const ErrorResponse = require("../utils/errorResponse");
const jwt = require("jsonwebtoken");
const Chief = require("../models/chiefWarden");

// check is user is authenticated
exports.isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies; // use this for postman
  // const { token } = req.headers;
  // Make sure token exists
  // console.log(token);

  if (!token) {
    return next(new ErrorResponse("Not authorized to access this route", 401));
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await Chief.findById(decoded.id);
    next();
  } catch (error) {
    return next(new ErrorResponse("Not authorized to access this route", 401));
  }
};

//middleware for admin
exports.isAdmin = (req, res, next) => {
  if (req.user.role === 0) {
    return next(new ErrorResponse("Access denied, you must be an admin", 401));
  }
  next();
};
