const jwt = require("jsonwebtoken");
const User = require("../models/user");
const ErrorHandler = require("../utils/errorHandler");
const catchAsync = require("./catchAsync");

exports.isAuthenticated = catchAsync(async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return next(new ErrorHandler("Please login to continue", 400));
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
  console.log(decoded);
  req.user = await User.findById(decoded.id);
  next();
});
