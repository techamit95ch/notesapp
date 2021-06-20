import JwtService from "../../services/JwtService";
import { REF_SECRET } from "../../config";
import { checkMail, RefreshToken } from "../../models";
import CustomErrorHandler from "../../services/CustomErrorHandler";
import bcrypt from "bcrypt";
import otpGenerator from "otp-generator";
export const checkUserMail = async (req, res,next) => {
  try {
    const exist = await checkMail.exists({ email: req.body.email });
     if (exist) {
       return next(
         CustomErrorHandler.alreadyExist("This email is already taken...")
       );
     }
    const { email, userAgent } = req.body;
    const hashUagent = await bcrypt.hash(userAgent, 10);
const otp = otpGenerator.generate(4, { upperCase: true, specialChars: false });


    // res.status(200).json(checkMail);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};