import mongoose from "mongoose";

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

const Subject = mongoose.model("subject", subjectSchema);

export default Subject;
