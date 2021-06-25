import mongoose from "mongoose";

const noteSchema = mongoose.Schema({
  roomId: {
    type: mongoose.Schema.ObjectId,
    trim: true,
    required: true,
    unique: true,
  },
  path: {
    type: String,
    trim: true,
    required: true,
  },
  data: {
    type: String,
    trim: true,
    required: true,
  },

  noteType: {
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

const note = mongoose.model("notes", noteSchema);

export default note;
