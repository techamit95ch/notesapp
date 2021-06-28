import classroom from "../models/classRoom.js";
import CPanel from "../models/cPanel.js";
import UserProfile from "../models/userProfile.js";
import Subject from "../models/subject.js";

export const getRooms = async (req, res, next) => {
  try {
    const { agent, subjectId } = req.body;

    const uid = await CPanel.findOne(
      {
        agent: agent,
      },
      {
        _id: 1,
      }
    );
    // const user = await UserProfile.findOne({ uid: uid });
    // console.log(user);
    //  if (subjectId!= "")
    const rooms = await classroom.find({ uId: uid }).populate([
      {
        path: "subjectId",
        model: Subject,
      },
      // {
      //   path: "uid",
      //   model: CPanel,
      //   select: "_id uid",
      //   // populate: {
      //   //   path: "_id",
      //   //   model: UserProfile,
      //   // },
      // },
    ]);
    console.log("rrooooommmssss========>", rooms);
    res.status(200).json(rooms);
  } catch (e) {
    console.log(e.message);
    res.status(404).json({ message: e.message });
  }
};
export const getSubjectRooms = async (req, res, next) => {
  try {
    const { agent, subjectId } = req.body;

    const uid = await CPanel.findOne(
      {
        agent: agent,
      },
      {
        _id: 1,
      }
    );

    const rooms = await classroom.find({ uId: uid, subjectId: subjectId })
    .populate([
      {
        path: "subjectId",
        model: Subject,
      },
      // {
      //   path: "uid",
      //   model: CPanel,
      //   select: "_id uid",
      //   // populate: {
      //   //   path: "_id",
      //   //   model: UserProfile,
      //   // },
      // },
    ]);
    console.log("rrooooommmssss========>", rooms);
    res.status(200).json(rooms);
  } catch (e) {
    console.log(e.message);
    res.status(404).json({ message: e.message });
  }
};
export const getJoinRooms = async (req, res, next) => {
  // console.log("from getJoinRooms");
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
    const user = await UserProfile.findOne({ uid: uid }, { semester: 1 });
    // console.log(user);
    const rooms = await classroom.find({
      $and: [
        { semester: user.semester },
        { role: "teacher" },
        { uid: { $not: uid } },
      ],
    });
    // console.log(rooms);
    res.status(200).json(rooms);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};
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
  const role = await UserProfile.findOne(
    {
      uid: uid,
    },
    {
      role: 1,
    }
  );
  // console.log(role);
  const classRoom = new classroom({
    subjectId: subjectId,
    roomNumber: roomNumber,
    role: role.role,
    semester: semester,
    uId: uid,
    uid: uid,
    agent: agent,
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
export const joinRoom = async (req, res, next) => {
  const { roomNumber, agent } = req.body;
  const uid = await CPanel.findOne(
    {
      agent: agent,
    },
    {
      _id: 1,
    }
  );
  const role = await UserProfile.findOne(
    {
      uid: uid,
    },
    {
      role: 1,
    }
  );
  const room = await classroom.findOne({
    roomNumber: roomNumber,
  });
  // console.log(room);
  const classRoom = new classroom({
    subjectId: room.subjectId,
    roomNumber: roomNumber,
    role: role.role,
    semester: room.semester,
    uId: uid,
    uid: uid,
    agent: agent,
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
