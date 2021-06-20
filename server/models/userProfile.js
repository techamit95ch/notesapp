import mongoose from "mongoose";

const userProfileSchema = mongoose.Schema({
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    validate: [isEmail, "invalid email"],
    isAsync: false,
    required: [true, "Email required"],
  },
  name: { type: String, required: true },
  uid: { type: String, required: true },
  bannerImage: String,
  profileImage: String,
  phoneNumber: Number,
  dob: {
    type: Date,
  },
  stream: String,
  role: { type: String, default: "student" },
  semester: { type: Number, required: true },
  city: { type: String },
  pin: { type: String },
  title: { type: String },
  github: { type: String },
  linked: { type: String },
  curr_pos: { type: String },
  last_edu: { type: String },
  updatedAt: [
    {
      type: Date,
      default: new Date(),
    },
  ],
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const userProfile = mongoose.model("userProfile", userProfileSchema);

export default userProfile;
