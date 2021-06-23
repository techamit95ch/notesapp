import checkMail from "../models/checkmail.js";
import bcrypt from "bcrypt";
import crypto from "crypto";
import nodemailer from "nodemailer";
import { google } from "googleapis";
const validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};
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
const sendMail = async (email,hashToken) => {
  try {
    // console.log("------ Inside send Mail --------");
    const accessToken = await oAtuth2Client.getAccessToken();
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "30701018055.amit@gmail.com",
        clientId: clinetID,
        clientSecret:clientSecret,
        refreshToken: refreshToken,
        accessToken: accessToken,
      },
    });
    const sendUrl = "http://localhost:8521/auth/signin/";
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
  } catch (error) {console.log(error);}
};
export const sendEmail = async (req, res) => {
  const { email, useragent, fromReact } = req.body;
  // import { isEmail } from "validator";

  try {
    if (!fromReact || !validateEmail(email)) {
      res.status(409).json({ message: "Not From React" });
    } else {
      // console.log(email);
      const exists = await checkMail.exists({ email: email });
      // console.log(exists);
      if (!exists) {
        //
        const date = Date.now();
        const salt = await bcrypt.genSalt(date);
        const u = useragent + email + date + salt;
        const hashToken = crypto
          .createHash("sha256")
          .update(u, "utf8")
          .digest("hex");

        sendMail(email,hashToken)
          .then((result) => console.log("Mail Send", result))
          .catch((e) => console.log(e.message));
      } else {
        res.status(409).json({ message: "user exists" });
      }
    }
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};
