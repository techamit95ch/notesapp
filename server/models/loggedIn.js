import mongoose from "mongoose";
import { isEmail } from "validator";

const loggedInSchema = mongoose.Schema({
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    validate: [isEmail, "invalid email"],
    isAsync: false,
    required: [true, "Email required"],
  },
  falseLoginAttempt: [Number],
  attemptedIp: {
    type: String,
    trim: true,
    required: true,
  },
  createdAt: {
    type: Date,

    default: new Date(),
  },
});

const loggedIn = mongoose.model("loggedIn", loggedInSchema);

export default loggedIn;
