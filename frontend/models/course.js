const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  course_name: String,
  studentsofcourse: [
    {
      type: Schema.Types.ObjectId,
      ref: "Student",
    },
  ],
  attendancy: [
    {
      date: { type: Date },
      students: [{
        type: Schema.Types.ObjectId,
        ref: "Student",
      },],
    },
  ],
});

module.exports = mongoose.model("Course", courseSchema);
