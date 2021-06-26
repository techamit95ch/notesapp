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
const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `files/admin-${file.fieldname}-${Date.now()}.${ext}`);
  },
});
const multerFilter = (req, file, cb) => {
  if (file.mimetype.split("/")[1] === "pdf") {
    cb(null, true);
  } else if (file.mimetype.split("/")[1] === "jpg") {
    cb(null, true);
  } else if (file.mimetype.split("/")[1] === "jpeg") {
    cb(null, true);
  } else if (file.mimetype.split("/")[1] === "doc") {
    cb(null, true);
  } else if (file.mimetype.split("/")[1] === "docx") {
    cb(null, true);
  } else {
    cb(new Error("not Valid Type"), false);
  }
};
// Multe;
// const upload = multer({ storage: storage });
const upload = multer({ storage: multerStorage, fileFilter: multerFilter });

const noteRoute = express.Router();
noteRoute.post("/text", noteTextCreate);
noteRoute.post("/file", upload.single("file"), noteCreate);

// noteRoute.get("/", getNotes);
noteRoute.post("/", getNotes);
// noteRoute.post("/single", getNote);
// noteRoute.post("/single", (req, res) => {
//   console.log(req.body);
// });
// noteRoute.get("/single", (req, res) => {
//   console.log(req.body);
// });
noteRoute.get("/:_id", getNote);
// console.log("-------- From Notes Router--------");
// courseRoute.patch("/:id", updatePost);

export default noteRoute;
