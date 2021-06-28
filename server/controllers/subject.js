import Subject from "../models/subject.js";
export const getSubjects = async (req, res, next) => {
  try {
    const { courseId } = req.params;
    const courses = await Subject.find({ courseId: courseId });
    // console.log(courses);
    res.status(200).json(courses);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};
export const getAllSubjects = async (req, res, next) => {
  try {
    // const { courseId } = req.params;
    const subjects = await Subject.find();
    console.log(subjects);
    res.status(200).json(subjects);
  } catch (e) {
    console.log(e.message);
    res.status(404).json({ message: e.message });
  }
};
export const getSubject = async (req, res, next) => {
  try {
    const { courseId } = req.params;

    const newCourse = await Course.findById(courseId);
    res.status(200).json(newCourse);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};
export const createSubject = async (req, res, next) => {
  const { subjectId, subjectName, courseId } = req.body;

  console.log(req.body);
  //   const newCourse = new Subject({
  //     subjectId,
  //     subjectName,
  //     courseId
  //   });
  const newCourse = new Subject(req.body);
  try {
    await newCourse.save().then(() => {
      res.status(201).json({
        message: "Subject Saved Successfully",
      });
    });
  } catch (error) {
    console.log({ message: error.message });
    res.status(409).json({ message: error.message });
  }
};
export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;
  // const newPostMessage = new PostMessage(post);

  try {
    if (!mongoose.Type.ObjectID.isValid(id))
      return res.status(404).send("Not Valid Id");
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {
      new: true,
    });
    res.json(updatedPost);
  } catch (error) {
    console.log({ message: error.message });
    res.status(407).json({ message: error.message });
  }
};
