const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  student_name: {
    type: String,
    required: true,
  },
  isbn: {
    type: String,
    required: true,
  },
  guardian: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  admitted_date: {
    type: Date,
  },
  registration_number: {
    type: String,
  },
  updated_date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Student = mongoose.model("student", StudentSchema);
