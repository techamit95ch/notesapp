import classroom from "../models/classRoom.js";
import CPanel from "../models/cPanel.js";
import Profile from "../models/userProfile.js";

export const getRooms = async (req, res, next) => {
  try {
    const { agent } = req.body;

    const uid = await CPanel.findOne(
      {
        agent: agent,
      },
      {
        _id: 1,
      }
    );
    console.log(uid);
    const rooms = await classroom.find({ uId: uid });
    console.log(rooms);
    res.status(200).json(rooms);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};
// export const getSubject = async (req, res, next) => {
//   try {
//     const { courseId } = req.params;

//     const newCourse = await Course.findById(courseId);
//     res.status(200).json(newCourse);
//   } catch (e) {
//     res.status(404).json({ message: e.message });
//   }
// };
export const createRoom = async (req, res, next) => {
  const { subjectId, roomNumber, agent, semester } = req.body;
  const uid = await CPanel.findOne(
    {
      agent: agent,
    },
    {
      _id: 1,
    }
  );
  const role = await Profile.findOne(
    {
      uid: uid,
    },
    {
      role: 1,
    }
  );
  console.log(role);
  const classRoom = new classroom({
    subjectId: subjectId,
    roomNumber: roomNumber,
    role: role.role,
    semester: semester,
    uId: uid,
  });
  try {
    await classRoom.save().then(() => {
      res.status(201).json({
        message: "Class Saved Successfully",
        status: true,
        role: role.role,
      });
    });
  } catch (error) {
    console.log({ message: error.message });
    res.status(409).json({ message: error.message });
  }
};
// export const updatePost = async (req, res) => {
//   const { id: _id } = req.params;
//   const post = req.body;
//   // const newPostMessage = new PostMessage(post);

//   try {
//     if (!mongoose.Type.ObjectID.isValid(id))
//       return res.status(404).send("Not Valid Id");
//     const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {
//       new: true,
//     });
//     res.json(updatedPost);
//   } catch (error) {
//     console.log({ message: error.message });
//     res.status(407).json({ message: error.message });
//   }
// };
