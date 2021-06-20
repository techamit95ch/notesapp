import mongoose from "mongoose";
import { isEmail } from "validator";

const subjectSchema = mongoose.Schema({
  subjectId: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  courseId: {
    type: String,
    trim: true,
    required: true,
  },
  subjectName: {
    type: String,
    trim: true,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const subject = mongoose.model("course", subjectSchema);

export default subject;
