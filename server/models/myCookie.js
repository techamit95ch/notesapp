import mongoose from "mongoose";

const noteSchema = mongoose.Schema({
  uId: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  userAgent: {
    type: String,
    trim: true,
    required: true,
  },
  status: { type: Boolean, default: true },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const note = mongoose.model("course", noteSchema);

export default note;
