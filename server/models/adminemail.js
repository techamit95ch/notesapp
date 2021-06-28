import mongoose from "mongoose";

const CheckAdminMailSchema = mongoose.Schema({
  userAgent: {
    type: String,
    trim: true,
    required: true,
  },
  uid: String,
  fromReact: Boolean,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const AdminMail = mongoose.model("adminVerification", CheckAdminMailSchema);
export default AdminMail;
