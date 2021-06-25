import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import {
  //   getCourses,
  createProfile,
  // updatePost,
} from "../controllers/profile.js";
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "./uploads"),
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${Math.round(
      Math.random() * 1e9
    )}${path.extname(file.originalname)}`;
    cb(null, uniqueName);
  },
});
const upload = multer({ storage: storage });
const profileRoute = express.Router();

// courseRoute.get("/", getCourses);
profileRoute.post("/", upload.single("profileImage"), createProfile);

// courseRoute.patch("/:id", updatePost);

export default profileRoute;
