import Course from "../models/course.js";
export const getCourses = async (req, res, next) => {
  try {
    const courses = await Course.find();
    // console.log(" Have been called from Node Js-----------------------");
    // console.log(courses);
    // console.log("---------- Have been called from Node Js-------------");
    res.status(200).json(courses);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};
export const getCourse = async (req, res, next) => {
  try {
    const { id } = req.params;

    const newCourse = await Course.findById(id);
    res.status(200).json(newCourse);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};
export const createCourse = async (req, res, next) => {
  const {
    courseId,
    courseName,
    courseDetails,
    courseImg,
    courseType,
    startDate,
    endDate,
  } = req.body;

  const newCourse = new Course({
    courseId,
    courseName,
    courseDetails,
    courseImg,
    courseType,
    startDate,
    endDate,
  });
  try {
    await newCourse.save().then(() => {
      res.status(201).json({
        message: "Course Saved Successfully",
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
