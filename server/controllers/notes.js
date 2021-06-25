import Note from "../models/notes.js";
import CPanel from "../models/cPanel.js";
import multer from "multer";
import path from "path";
import fs from "fs";

export const noteCreate = async (req, res, next) => {  // console.log(req.body);
  const notePath = req.file.path;
    const data = {
      path: notepath,
      roomId: req.body.roomId,
      noteType: req.body.noteType,
    };
  const newNote = new Note(data);
  try {
    await newNote.save();
    res.status(201).json(newNote);
  } catch (error) {
    console.log({ message: error.message });
    res.status(409).json({ message: error.message });
  }

}
export const noteTextCreate = async (req, res, next) => {
  // console.log(req.body);  
  const data = {
    data: req.body.textdata,
    roomId: req.body.roomId,
    noteType: req.body.noteType,
  };
  const newNote = new Note(data);
  try {
    await newNote.save();
    res.status(201).json(newNote);
  } catch (error) {
    console.log({ message: error.message });
    res.status(409).json({ message: error.message });
  }
};
export const getNote = async (req, res) => {
  const id = req.params._id;
  try {
    const notes = await Note.find({_id:id});
    res.status(200).json(notes);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};
export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};