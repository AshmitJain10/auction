const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  bidderName: {
    type: String,
    required: true,
  },
});
const Teacher = mongoose.model("teacher", teacherSchema);

module.exports = Teacher;
