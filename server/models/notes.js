import mongoose from "mongoose";
import { isEmail } from "validator";
import { APP_URL } from "../config";

const noteSchema = mongoose.Schema({
  roomId: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  path: {
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
  notepath: {
    type: String,
    get: (notepath) => {
      return `${APP_URL}/${notepath}`;
    },
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const note = mongoose.model("course", noteSchema);

export default note;
