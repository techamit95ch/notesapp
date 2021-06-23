import mongoose from "mongoose";
const cPanelSchema = mongoose.Schema({
  userAgent: {
    type: String,
    trim: true,
    required: true,
  },
  agent: {
    type: String,
    trim: true,
    required: true,
  },
  uid: {
    type: mongoose.Schema.ObjectId,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    unique: true,
    required: true,
  },
  salt: {
    type: String,

    unique: true,

    required: true,
  },
  accStatus: {
    type: Number,
    default: 1,
  },
  isLoggedIn: Boolean,
  loggedIp: {
    type: String,
  },

  fromReact: Boolean,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const CPanel = mongoose.model("cpanel", cPanelSchema);

export default CPanel;
