import checkMail from "../models/checkmail.js";
import emailValidation from "../validation/emailValidation";
import bcrypt from "bcrypt";
import crypto from "crypto";
export const getEmail = async (req, res) => {
  const { email, useragent, fromReact } = req.body;

  try {

    if (!fromReact || fromReact ==0){
      res.status(409).json({message: "Not From React"});
    }else{
      const exists = await checkMail.exists();
      if(!exists){
        const salt= awai bcrypt.genSalt(401);
        const date = Date.now();
        const u= useragent + email +date;

        const ua = await bcrypt.hash(u,salt);

        const secret = 'HnasBzbxH9';
        const hash = crypto.createHmac('sha512', secret)
                   .update(ua)
                   .digest('hex');
        const {error}=emailValidation({email,useragent,hash, fromReact});
        consle.log({email,useragent,hash, fromReact});

      }else {
        res.status(409).json({message: "user exists"});
      }
    }


  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};
