const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  content: [String],
  audience: String,
  price: Number,
  image: String,
});

module.exports = mongoose.model("Course", courseSchema);