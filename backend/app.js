const express = require("express");
const error = require("./middleware/error");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());
app.use("/", express.static(path.join(__dirname, "uploads")));

//config

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({
    path: "backend/config/.env",
  });
}

const userRoute = require("./routes/user");

app.use("/api/v2", userRoute);

// it's for error handling

app.use(error);

module.exports = app;
