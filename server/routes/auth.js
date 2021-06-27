import express from "express";

import {
  createLoginInfo,
  LoginInfo,
  CheckLoginInfo,
  //   matchUID,
  // updatePost,
} from "../controllers/cPanel.js";

const authRoute = express.Router();

// subjectRoute.get("/:courseId", getSubjects);
authRoute.post("/create", createLoginInfo);
authRoute.post("/login", LoginInfo);
authRoute.post("/check-login", CheckLoginInfo);
// emailRoute.get("/:uid", matchUID);
// emailRoute.get("/", getEmail);

// courseRoute.patch("/:id", updatePost);

export default authRoute;
