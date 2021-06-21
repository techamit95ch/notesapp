import mongoose from "mongoose";
// import { isEmail } from "validator";

const courseSchema = mongoose.Schema({
  courseId: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  courseName: {
    type: String,
    trim: true,
    required: true,
  },
  courseDetails: {
    type: String,
    trim: true,
    required: true,
  },
  courseImg: {
    type: String,
  },
  courseType: {
    type: String,
    trim: true,
    lowercase: true,
    required: true,
  },
  startDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Course = mongoose.model("course", courseSchema);

export default Course;
