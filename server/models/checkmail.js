import mongoose from "mongoose";
// import { isEmail } from "validator";
var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};
const CheckMailSchema = mongoose.Schema({
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    validate: [validateEmail, "invalid email"],
    isAsync: false,
    required: [true, "Email required"],
  },

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
  fromReact: Boolean,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const checkMail = mongoose.model("checkmail", CheckMailSchema);
export default checkMail;
