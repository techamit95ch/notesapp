import mongoose from "mongoose";
import { isEmail } from "validator";

const RoomUserSchema = mongoose.Schema({
  roomId: {
    type: String,
    trim: true,
    required: true,
    unique: true,
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

const roomUser = mongoose.model("course", RoomUserSchema);

export default roomUser;
