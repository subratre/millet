const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB)
    .then((data) => console.log(`Database connected`))
    .catch((err) => console.log(err));
};

module.exports = connectDatabase;
