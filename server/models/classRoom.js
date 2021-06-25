import mongoose from "mongoose";
// import { isEmail } from "validator";

const ClassRoomSchema = mongoose.Schema({
  roomNumber: {
    type: String,
    trim: true,
    required: true,
  },
  semester: {
    type: Number,
    trim: true,
    required: true,
  },
  subjectId: {
    type: mongoose.Schema.ObjectId,

    trim: true,
    required: true,
  },
  uId: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  role: {
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

const ClassRoom = mongoose.model("classroom", ClassRoomSchema);

export default ClassRoom;
