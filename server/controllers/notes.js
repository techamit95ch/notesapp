import Note from "../models/notes.js";
// import CPanel from "../models/cPanel.js";

export const noteCreate = async (req, res, next) => {
  // const notePath = __dirname + req.file.path;
  // console.log(notePath);
  console.log(req.file);
  var fullUrl =
    req.protocol + "://" + req.get("host") + "/" + req.originalUrl + "/";
  // + req.originalUrl;
  const notePath2 = fullUrl + req.file.path;
  console.log(notePath2);
  const data = {
    path: notePath2,
    roomId: req.body.roomId,
    noteType: req.body.noteType,
    header: req.body.header,
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
export const noteTextCreate = async (req, res, next) => {
  console.log(req.body);
  const data = {
    path: "",
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
    const notes = await Note.find({ _id: id });
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
