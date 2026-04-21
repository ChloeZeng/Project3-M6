const mongoose = require("mongoose");

const enrollmentSchema = new mongoose.Schema({
  courseId: String,
  name: String,
  email: String,
  goal: String,
});

module.exports = mongoose.model("Enrollment", enrollmentSchema);