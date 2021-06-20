import mongoose from "mongoose";
import { isEmail } from "validator";

const blockedIpSchema = mongoose.Schema({
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    validate: [isEmail, "invalid email"],
    isAsync: false,
    required: [true, "Email required"],
  },

  blockedIp: {
    type: String,
    trim: true,
    required: true,
  },
  userAgent: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const blockedIp = mongoose.model("blockedIp", blockedIpSchema);

export default blockedIp;
