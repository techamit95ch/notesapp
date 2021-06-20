import mongoose from "mongoose";
import { isEmail } from "validator";
var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};
const cPanelSchema = mongoose.Schema({  
  userAgent: {
    type: String,
    trim: true,
    required: true,
  },
  uid: {
    type: Number,
    trim: true,
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
  loginAttempt: [Number],
  accStatus: {
    type: Number,
    default: 0,
  },
  isLoggedIn: Boolean,
  loggedIp: [
    {
      type: String,
    },
  ], 
  fromReact: Boolean,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const CPanel = mongoose.model("cpanel", cPanelSchema);

export default CPanel;
