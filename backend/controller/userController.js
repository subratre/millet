const catchAsync = require("../middleware/catchAsync");
const User = require("../models/user");
const path = require("path");
const ErrorHandler = require("../utils/errorHandler");
const jwt = require("jsonwebtoken");
const sendMail = require("../utils/sendMail");
const sendToken = require("../utils/jwtToken");

exports.createUser = catchAsync(async (req, res, next) => {
  const { email, name, password } = req.body;

  const userEmail = await User.findOne({ email });
  if (userEmail) {
    return next(new ErrorHandler("User alredy exist", 401));
  }

  if (req.files) {
    const file = req.files.file;
    const newfilename = Date.now() + Math.random(0, 100) + file.name;
    req.body.avatar = newfilename;
    file.mv(path.join(__dirname, "../uploads", newfilename));
  }

  const activationToken = createActivationToken(req.body);
  const activationUrl = `http://localhost:3000/activation/${activationToken}`;
  try {
    await sendMail({
      email: email,
      subject: "Activate your account",
      message: `Hello ${name}, please click on the link to activate your account ${activationUrl}`,
    });
    res.status(201).json({
      status: "success",
      message: `Please check you email ${email}, to activate your account`,
    });
  } catch (err) {
    return next(new ErrorHandler(err.message, 400));
  }
});

const createActivationToken = (user) => {
  return jwt.sign(user, process.env.JWT_SECRET_KEY, { expiresIn: "5m" });
};

exports.activateUser = catchAsync(async (req, res, next) => {
  const { token } = req.body;

  const newUser = jwt.verify(token, process.env.JWT_SECRET_KEY);
  if (!newUser) {
    return next(new ErrorHandler("Invalid token", 400));
  }

  const { name, email, password, avatar } = newUser;

  let user = await User.findOne({ email });

  if (user) {
    return next(new ErrorHandler("User alredy exist", 400));
  }

  user = await User.create({ name, email, password, avatar });

  sendToken(user, 201, res);
});

//login controller

exports.loginUser = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorHandler("Please provide all Fields!", 400));
  }

  let user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Please provide correct details", 400));
  }
  const isValidPassword = await user.comparePassword(password);
  if (!isValidPassword) {
    return next(new ErrorHandler("Incorrect Password", 400));
  }
  user.password = undefined;
  sendToken(user, 201, res);
});

exports.getAllUser = catchAsync(async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return next(new ErrorHandler("User doesn't exist", 400));
    }

    res.status(200).json({ success: true, user });
  } catch (err) {
    return next(new ErrorHandler(err.message, 500));
  }
});
