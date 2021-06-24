import checkMail from "../models/checkmail.js";
import CPanel from "../models/cPanel.js";
import bcrypt from "bcrypt";
import sha256 from "sha256";
import sha1 from "sha1";
import sha512 from "js-sha512";
import publicIp from "public-ip";
import crypto from "crypto";
const AlgorithmToUse = "aes-192-cbc"; //algorithm to use
const AlgoPassword = "xVf*82mnIOmetz89HJGsb";
const AlgoKey = crypto.scryptSync(AlgoPassword, "salt", 24); //create key
const IV = crypto.randomBytes(16); // generate different ciphertext everytime
const Cipher = crypto.createCipheriv(AlgorithmToUse, AlgoKey, IV);
// var encrypted = cipher.update(text, 'utf8', 'hex') + cipher.final('hex'); // encrypted text
const DeCipher = crypto.createDecipheriv(AlgorithmToUse, AlgoKey, IV);
//var decrypted = decipher.update(encrypted, 'hex', 'utf8') + decipher.final('utf8'); //deciphered text

const validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};
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
export const LoginInfo = async (req, res, next) => {
  const { email, fromReact, password } = req.body;
  //   console.log(email);
  if (!fromReact || !validateEmail(email))
    res.status(402).json({ message: "Mail Not Correct", status: false });
  else {
    const emailId = await checkMail.findOne({ email: email }, { _id: 1 });
    const uid = emailId._id;
    //  console.log(emailId);
    const panelExists = await CPanel.exists({ uid: uid });
    if (!panelExists) {
      console.log(panelExists);
    }
    const panel = await CPanel.findOne({ uid: uid });
    const salt = panel.salt;

    const agent = panel.agent;
    const cpassword =
      salt + agent + sha512.hmac("notesApp", password).toString();
    const match = await bcrypt.compare(cpassword, panel.password);
    if (!match)
      res.status(401).json({ message: "Wrong Credential", status: false });
    else {
      const loggedIn = await CPanel.findByIdAndUpdate(panel._id, {
        isLoggedIn: true,
      });
      const encrypted =
        Cipher.update(agent, "utf8", "hex") + Cipher.final("hex");
      res
        .status(202)
        .json({ message: "Loggin Success", status: true, agent: encrypted });
    }
  }
};
export const CheckLoginInfo = async (req, res, next) => {
  const { agent } = req.params;
  const decryptedAgent =
    DeCipher.update(agent, "hex", "utf8") + DeCipher.final("utf8"); //deciphered text
  const panelExists = await CPanel.exists({ agent: decryptedAgent });
  if (panelExists) {
    const isLoggedIn = await CPanel.findOne(
      {
        agent: decryptedAgent,
      },
      {
        isLoggedIn: 1,
      }
    );
    console.log(isLoggedIn);
  }
};
export const logOut = async (req, res, next) => {
  const { agent } = req.body;
  const decryptedAgent =
    DeCipher.update(agent, "hex", "utf8") + DeCipher.final("utf8"); //deciphered text
  const panelExists = await CPanel.exists({ agent: decryptedAgent });
  if (panelExists) {
    const logout = await CPanel.findByIdAndUpdate(panel._id, {
      isLoggedIn: false,
    });
    console.log(logout);
    res
        .status(202)
        .json({ message: "log out Success", status: true});
  }
};
