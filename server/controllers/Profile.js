import userProfile from "../models/userProfile.js";
import CPanel from "../models/cPanel.js";
import multer from "multer";
import path from "path";
import fs from "fs";

export const createProfile = async (req, res, next) => {
  // console.log(req.body);

  const profileImage = req.file.path;
  // console.log(profileImage);
  const {
    agent,
    roleId,
    name,
    phoneNumber,
    dob,
    courseId,
    role,
    semester,
    city,
    pin,
    title,
    github,
    linkedIn,
    curr_pos,
    last_edu,
  } = req.body;
  console.log(profileImage);
  console.log(role);

  // const agent2 = sha1(agent); //deciphered text
  const panelExists = await CPanel.exists({ agent: agent });
  if (panelExists) {
    const uid = await CPanel.findOne(
      {
        agent: agent,
      },
      {
        _id: 1,
      }
    );
    const data = {
      uid: uid,
      agent: agent,
      roleId: roleId,
      name: name,
      phoneNumber: phoneNumber,
      dob: dob,
      role: role,
      city: city,
      pin: pin,
      title: title,
      github: github,
      linkedIn: linkedIn,
      curr_pos: curr_pos,
      last_edu: last_edu,
    };
    if (role == "student") {
      data.courseId = courseId;
      data.semester = semester;
    }
    const newProfile = new userProfile(data);
    try {
      await newProfile.save().then(() => {
        res.status(201).json({
          message: "Profile Saved Successfully",
        });
      });
    } catch (error) {
      console.log({ message: error.message });
      res.status(409).json({ message: error.message });
    }
  } else console.log("user not exists");
};
export const createTextProfile = async (req, res, next) => {
  // console.log(req.body);
  console.log("-------  From createTextProfile  -------");
  // const profileImage = req.file.path;
  // console.log(profileImage);
  const {
    agent,
    roleId,
    name,
    phoneNumber,
    dob,
    courseId,
    role,
    semester,
    city,
    pin,
    title,
    github,
    linkedIn,
    curr_pos,
    last_edu,
    profileImage,
  } = req.body;
  // console.log(profileImage);
  console.log(req.body);
  console.log("++++++++++++++++++");
  console.log(agent);

  // const agent2 = sha1(agent); //deciphered text
  const panelExists = await CPanel.exists({ agent: agent });
  if (panelExists) {
    const uid = await CPanel.findOne(
      {
        agent: agent,
      },
      {
        _id: 1,
      }
    );
    const data = {
      uid: uid,
      agent: agent,
      roleId: roleId,
      name: name,
      phoneNumber: phoneNumber,
      dob: dob,
      role: role,
      city: city,
      pin: pin,
      title: title,
      github: github,
      linkedIn: linkedIn,
      curr_pos: curr_pos,
      last_edu: last_edu,
      profileImage: profileImage,
    };
    if (role == "student") {
      data.courseId = courseId;
      data.semester = semester;
    }
    const newProfile = new userProfile(data);
    try {
      await newProfile.save().then(() => {
        res.status(201).json({
          message: "Profile Saved Successfully",
          status: true,
        });
      });
    } catch (error) {
      console.log({ message: error.message });
      res.status(409).json({ message: error.message });
    }
  } else console.log("user not exists");
};
export const getProfile = async (req, res, next) => {
  try {
    const profile = await userProfile.findOne({ agent: req.body.agent });
    res.status(200).json(profile);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};
export const AllProfile = async (req, res, next) => {
  try {
    const profiles = await userProfile.find({});
    res.status(200).json(profiles);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};