import express from "express";

import {
  sendEmail,
  matchUID,
  matchAdminUID,
  createAdminEmail,
  // updatePost,
} from "../controllers/email.js";

const emailRoute = express.Router();

// subjectRoute.get("/:courseId", getSubjects);
emailRoute.post("/", sendEmail);
emailRoute.post("/admin", createAdminEmail);

emailRoute.get("/:uid", matchUID);
emailRoute.get("/admin/:uid", matchAdminUID);
// emailRoute.get("/", getEmail);

// courseRoute.patch("/:id", updatePost);

export default emailRoute;
