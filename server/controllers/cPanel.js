import checkMail from "../models/checkmail.js";
import CPanel from "../models/cPanel.js";
import bcrypt from "bcrypt";
import sha256 from "sha256";
import sha1 from "sha1";
import sha512 from "js-sha512";
import publicIp from "public-ip";

export const createLoginInfo = async (req, res, next) => {
  //   console.log(req.body);
  const { userAgent, uid, fromReact, password } = req.body;

  const uid2 = sha512.hmac("amit", uid).toString();
  const emailId = await checkMail.findOne({ uid: uid2 }, { _id: 1 });
  //   console.log(emailId);
  const salt = await bcrypt.genSalt(Date.now());

  const ipV4 = await publicIp.v4();
  const agent = sha1(
    sha256(
      uid2 + sha512.hmac("notesApp", ipV4.toString()).toString()
    ).toString() + salt
  );
  const salt1 = sha256(salt.toString() + sha1(userAgent).toString()).toString;

  const cpassword =
    salt1 + agent + sha512.hmac("notesApp", password).toString();

  const hashedPassword = await bcrypt.hash(cpassword, 10);
  const data = {
    uid: emailId,
    ip: ipV4,
    agent: agent,
    fromReact: true,
    userAgent: sha1(userAgent),
    salt: salt1,
    loginAttempt: 0,
    password: hashedPassword,
  };
  const exists = await CPanel.exists({ uid: emailId });
  if (!exists) {
    const newUser = new CPanel(data);
    try {
      await newUser.save().then(() => {
        res.status(201).json({
          message: "User Saved Successfully",
          agent: agent,
          status: true,
        });
      });
    } catch (error) {
      console.log({ message: error.message });
      res.status(409).json({ message: error.message });
    }
  } else {
    console.log({ message: "User Exists", status: false });
    res.status(202).json({ message: "User Exists", status: false });
  }
};
