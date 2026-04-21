const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: String,
  instructor: String,
  category: String,
});

module.exports = mongoose.model("Course", courseSchema);