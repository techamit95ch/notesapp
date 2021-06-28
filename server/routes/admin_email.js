import express from "express";

import {
//   sendEmail,
//   matchUID,
  matchAdminUID,
  createAdminEmail,
  checkLoggedIn,
  // updatePost,
} from "../controllers/adminEmail.js";

const adminRoute = express.Router();

// subjectRoute.get("/:courseId", getSubjects);
// adminRoute.post("/", sendEmail);
adminRoute.post("/", createAdminEmail);
// adminRoute.post("/", (req, res, next)=>{
//     console.log(req.body);
// });

// adminRoute.get("/:uid", matchUID);
adminRoute.get("/:uid", matchAdminUID);
adminRoute.post("/checkLoggedIn", checkLoggedIn);
// emailRoute.get("/", getEmail);

// courseRoute.patch("/:id", updatePost);

export default adminRoute;
