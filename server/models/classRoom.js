import mongoose from "mongoose";
import { isEmail } from "validator";

const ClassRoomSchema = mongoose.Schema({
  roomId: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  roomLink: {
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
  subjectId: {
    type: String,

    trim: true,
    required: true,
  },
  uId: {
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

const ClassRoom = mongoose.model("course", ClassRoomSchema);

export default ClassRoom;
