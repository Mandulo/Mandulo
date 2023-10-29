const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    student_name: String,
    class: String,
});

module.exports = mongoose.model("Student", studentSchema);
