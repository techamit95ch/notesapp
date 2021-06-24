import PostMessage from "../models/userProfile.js";
export const createProfile= async (req, res) => {
    if (req.body.role=="teacher"){
        const data ={
          name,
          roleId,
          uid,
          bannerImage,
          profileImage,
          phoneNumber,
          dob,
          role,
          city,
          pin,
          title,
          github,
          linkedIn,
          curr_pos,
          last_edu,
        } = req.body;
    }
  const newProfile = new PostMessage(post);

  try {
    await newPostMessage.save();
    res.status(201).json(newPostMessage);
  } catch (error) {
    console.log({ message: error.message });
    res.status(409).json({ message: error.message });
  }
};