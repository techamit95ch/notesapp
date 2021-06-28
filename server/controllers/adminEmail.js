// import checkMail from "../models/checkmail.js";
import checkAdminMail from "../models/adminemail.js";
import bcrypt from "bcrypt";
// import crypto from "crypto";
import nodemailer from "nodemailer";
import { google } from "googleapis";
const validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};
import sha256 from "sha256";
import sha1 from "sha1";
import sha512 from "js-sha512";

const clinetID =
  "597044910968-7bl2vajpmdf2qs9e6hvlnu7u1djhubqd.apps.googleusercontent.com";
const clientSecret = "nerxuDQJXG0zg2ecei4fBJn1";
const redirectURI = "https://developers.google.com/oauthplayground";
const refreshToken =
  "1//04cbtt2_9lPnMCgYIARAAGAQSNwF-L9Ir6tIt44dKNI8vF0ue4LOZFXhHpjaWWo_GyR7lsTXUumhZB5hUjvJpf00Xok4V4qBpxyg";
const oAtuth2Client = new google.auth.OAuth2(
  clinetID,
  clientSecret,
  redirectURI
);
oAtuth2Client.setCredentials({ refresh_token: refreshToken });
const sendMail = async (email, hashToken, url) => {
  try {
    // console.log("------ Inside send Mail --------");
    const accessToken = await oAtuth2Client.getAccessToken();
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "30701018055.amit@gmail.com",
        clientId: clinetID,
        clientSecret: clientSecret,
        refreshToken: refreshToken,
        accessToken: accessToken,
      },
    });
    const sendUrl = url;
    // const sendUrl = "http://localhost:8521/auth/signin/";
    const mailOptions = {
      from: "Notes App 📧 <30701018055.amit@gmail.com>",
      to: email,
      subject: "Access Token For your Notes App",
      text: hashToken,
      html:
        `<body>
              <div>
              <p style="font-size:50px;">Token</p>
              <p style="">Click The Link and close the previous NotesApp Tab Or Dont close the Window just copy The Token and Paste it to Verify Key box.</p>
              <div style="box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;padding: 2px 16px; border-radious:10px;"><p>` +
        hashToken +
        `</p>
                <a style="
  color: white;
  background-color: #1e90ff;;
  padding: 15px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  padding: 15px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;padding: 2px 16px; border-radious:5px;"
              href="` +
        sendUrl +
        hashToken +
        `" target="_blank">Click Here</a>
                <br/>

                </div>

              </div>
              </body>`,
    };
    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const createAdminEmail = async (req, res) => {
  const { userAgent, fromReact } = req.body;
  // import { isEmail } from "validator";
  //   console.log(req.body);
  const sendUrl = "http://localhost:9361/auth/signin/";

  try {
    if (!fromReact) {
      res.status(409).json({ message: "Not From React" });
    } else {
      const email = "30701018055.amit@gmail.com";
      const date = Date.now();
      const salt = await bcrypt.genSalt(date);
      // userAgent += email + salt;
      console.log(userAgent + email + salt);
      const u = sha1(userAgent + email + salt).toString();
      const uid = sha256(u).toString();
      const uid2 = sha512.hmac("amit", uid).toString();

      // const uid2 = sha256(uid).toString();

      const newEmailRegister = new checkAdminMail({
        // email: email,
        userAgent: sha1(userAgent),
        uid: uid2,
        fromReact: fromReact,
      });
      try {
        await newEmailRegister.save().then(() => {
          console.log("Data Saved Successfully ");
          res.status(201).json({
            message: "Close Window Saved Successfully",
            result: true,
          });
        });
      } catch (error) {
        console.log({ message: error.message });
        res.status(409).json({ message: error.message });
      }
      sendMail(email, uid, sendUrl)
        .then((result) => {
          console.log("Mail Send", result);
        })
        .catch((e) => console.log(e.message));
    }
  } catch (e) {
    console.log({ message: e.message });
    res.status(404).json({ message: e.message });
  }
};
export const matchAdminUID = async (req, res, next) => {
  const { uid } = req.params;
//   console.log(req.params);
  
  try {
      const uid2 = sha512.hmac("amit", uid).toString();
    const exists = await checkAdminMail.exists({ uid: uid2 });
    console.log({ message: "Exists data", result: exists, uid2 });
    res.status(200).json({ message: "Exists data", result: exists, uid: uid });
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};
export const checkLoggedIn = async (req, res, next) => {
  const { uid } = req.body;
  if (uid) {
    try {
      const uid2 = sha512.hmac("amit", uid).toString();
      const exists = await checkAdminMail.exists({ uid: uid2 });
      // console.log({ message: "Exists data", result: exists, uid2 });
      res
        .status(200)
        .json({ message: "Exists data", result: exists, uid: uid });
    } catch (e) {
      res.status(404).json({ message: e.message });
    }
  } else {
    res.status(401).json({ message: "User Does Not Exists", result: false });
  }
};
