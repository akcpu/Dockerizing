const { appConfig } = require("../config/index");
const mongoose = require("mongoose");
exports.connect = function () {
  mongoose
    .connect(appConfig.host)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));
};
