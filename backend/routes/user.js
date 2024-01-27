const express = require("express");
const {
  createUser,
  activateUser,
  loginUser,
  getAllUser,
} = require("../controller/userController");
const { isAuthenticated } = require("../middleware/auth");

const router = express.Router();

router.route("/user/create-user").post(createUser);
router.route("/user/activate-user").post(activateUser);
router.route("/user/login").post(loginUser);
router.route("/user/getuser").get(isAuthenticated, getAllUser);

module.exports = router;
