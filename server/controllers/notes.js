import Note from "../models/notes.js";
import CPanel from "../models/cPanel.js";
import ClassRoom from "../models/classRoom.js";
import userProfile from "../models/userProfile.js";
import Subject from "../models/subject.js";

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
  // console.log(req.body);
  const { agent } = req.body;
  const uid = await CPanel.findOne(
    {
      agent: agent,
    },
    {
      _id: 1,
    }
  );
  const data = {
    path: "",
    data: req.body.textdata,
    roomId: req.body.roomId,
    noteType: req.body.noteType,
    header: req.body.header,
    uid: uid,
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
  // console.log("form get Note");
  // console.log(req.params);

  try {
    const id = req.params._id;
    const note = await Note.findOne({ _id: id });

    res.status(200).json(note);
    // console.log(note);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};
export const getNotes = async (req, res) => {
  const { agent, roomId } = req.body;
  // const uid = await CPanel.findOne(
  //   {
  //     agent: agent,
  //   },
  //   {
  //     _id: 1,
  //   }
  // );
  try {
    // console.log("------------- from Get Notes ------------");
    const notes = await Note.find({ roomId: roomId });
    // const rooms = await ClassRoom.findOne(
    //   { _id: roomId, role: "teacher" },
    //   { uId: 1, subjectId: 1 }
    // );
    // const subject = await Subject.findOne(
    //   { _id: rooms.subjectId },
    //   { subjectName: 1 }
    // );
    // const teacher = await userProfile.findOne({ uid: rooms.uId }, { name: 1 });
    res.status(200).json(notes);
    // console.log(notes2);
  } catch (e) {
    console.log(e.message);
    res.status(404).json({ message: e.message });
  }
};
