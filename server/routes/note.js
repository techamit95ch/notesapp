import express from "express";

import multer from "multer";

import path from "path";
import fs from "fs";
import {
  getNotes,
  noteCreate,
  noteTextCreate,
  getNote,
  // updatePost,
} from "../controllers/notes.js";
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

const noteRoute = express.Router();

// courseRoute.get("/", getCourses);
noteRoute.post("/file/", upload.single("profileImage"), noteCreate);
noteRoute.post("/text/", noteTextCreate);
noteRoute.get("/", noteTextCreate);
noteRoute.get("/:id", noteTextCreate);

// courseRoute.patch("/:id", updatePost);

export default noteRoute;
