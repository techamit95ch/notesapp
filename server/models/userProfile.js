import mongoose from "mongoose";

const userProfileSchema = mongoose.Schema({
  name: { type: String, required: true },
  roleId: { type: String },
  uid: { type: mongoose.Schema.ObjectId, unique: true, required: true },
  bannerImage: String,
  profileImage: String,
  phoneNumber: Number,
  dob: {
    type: Date,
  },
  courseId: { type: mongoose.Schema.ObjectId },
  role: { type: String, default: "student" },
  semester: { type: Number, required: true },
  city: { type: String },
  pin: { type: String },
  title: { type: String },
  github: { type: String },
  linkedIn: { type: String },
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
