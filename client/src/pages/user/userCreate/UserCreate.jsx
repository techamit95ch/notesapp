import React, { useState, useEffect } from "react";
import "./usercreate.css";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Avatar,
  Box,
  CardHeader,
  CardActions,
  Collapse,
  IconButton,
  TextField,
  TextareaAutosize,
  Fab,
  Select,
  InputLabel,
  NativeSelect,
  FormControl,
  FormHelperText,
  MenuItem,
} from "@material-ui/core";
import { useDispatch } from "react-redux";

import Rating from "@material-ui/lab/Rating";
import clsx from "clsx";

import { red } from "@material-ui/core/colors";

import { Room } from "@material-ui/icons";
import ReactDOM from "react-dom";
import { createProfile, createTextProfile } from "../../../actions/profile";
import { loginAuth } from "../../../actions/authInfo";
import { useSelector } from "react-redux";
import FileBase from "react-file-base64";

const useStyles = makeStyles((theme) => ({
  root2: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "35ch",
  },
  selectField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "31ch",
  },
  textField2: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "72ch",
  },
}));
const StudentDiv = ({ user, setUser }) => {
  const classes = useStyles();
  // const dispatch = useDispatch();

  return <></>;
};
const TeacherDiv = (user, setUser) => {
  const classes = useStyles();
  // const dispatch = useDispatch();

  return <div></div>;
};

export default function UserCreate() {
  const classes = useStyles();
  // const dispatch = useDispatch();

  const [user, setUser] = useState({
    agent: localStorage.getItem("agent"),
    roleId: "",
    name: "",
    phoneNumber: "",
    dob: "",
    courseId: "",
    // bannerImage: "",
    profileImage: "",
    role: "",
    semester: "",
    city: "",
    pin: "",
    title: "",
    github: "",
    linkedIn: "",
    curr_pos: "",
    last_edu: "",
  });
  // useEffect(() => {
  //   dispatch();
  // }, [user, dispatch]);

  const [profileImage, setProfileImage] = useState({
    selectedFile: null,
  });
  const profileImageHandler = (e) => {
    e.preventDefault();
    setProfileImage({
      selectedFile: e.target.files[0],
      loaded: 0,
    });
  };
  const [img, setImg] = useState("");

  const courses = useSelector((state) => state.course);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(user);
    // dispatch(createProfile(formData));
    dispatch(createTextProfile(user));
  };
  return (
    <div className="usercreate">
      {/* {Update Form Div} */}
      <div className="userUpdate">
        {/* <span className="userUpdateTitle">{"Create/Update"} user</span> */}
        <form
          onSubmit={handleSubmit}
          className="userUpdateForm was-validated"
          method="POST"
        >
          <div class="form-row">
            <div class={classes.root2}>
              <TextField
                label="User Id"
                id="outlined-margin-normal"
                className={classes.textField}
                helperText="User Id"
                margin="normal"
                variant="outlined"
                onChange={(e) =>
                  setUser({
                    ...user,
                    roleId: e.target.value,
                  })
                }
                accept=".jpg, .jpeg , image/jpeg"
              />
              <TextField
                label="Full Name"
                id="outlined-margin-normal"
                className={classes.textField}
                helperText="Full Name"
                margin="normal"
                variant="outlined"
                onChange={(e) =>
                  setUser({
                    ...user,
                    name: e.target.value,
                  })
                }
              />
              <TextField
                label="Phone"
                type="number"
                id="outlined-margin-normal"
                className={classes.textField}
                helperText="Phone"
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) =>
                  setUser({
                    ...user,
                    phoneNumber: e.target.value,
                  })
                }
              />
              <TextField
                label="DOB"
                type="date"
                id="outlined-margin-normal"
                className={classes.textField}
                helperText="DOB Date"
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) =>
                  setUser({
                    ...user,
                    dob: e.target.value,
                  })
                }
              />
              <div class="clear"></div>{" "}
              {/* <TextField
                label="Profile Image"
                id="outlined-margin-normal"
                type="file"
                className={classes.textField}
                helperText="Profile Image"
                margin="normal"
                onChange={profileImageHandler}
              /> */}
              <div className={classes.fileInput}>
                {/* <div className=""> */}
                <FileBase
                  label="Img"
                  id="Img"
                  type="file"
                  helperText="Profile Img"
                  margin="normal"
                  onDone={(e) => {
                    // console.log(e);
                    const type = e.type;

                    // console.log(type);
                    if (type == "image/jpeg" || type == "image/jpg") {
                      setImg(e.base64);
                      setUser({
                        ...user,
                        profileImage: e.base64,
                      });
                    } else {
                      e.name = "";
                      e.base64 = "";
                    }
                  }}
                />{" "}
              </div>
              {/* <TextField
                label="Cover Image"
                id="outlined-margin-normal"
                type="file"
                className={classes.textField}
                helperText="Cover Image"
                margin="normal"
                onChange={(e) =>
                  setUser({
                    ...user,
                    bannerImage: e.target.files[0],
                  })
                }
               /> 
               */}
              <TextField
                label="City"
                id="outlined-margin-normal"
                className={classes.textField}
                helperText="City"
                margin="normal"
                variant="outlined"
                multiline
                onChange={(e) =>
                  setUser({
                    ...user,
                    city: e.target.value,
                  })
                }
              />
              <TextField
                label="Pin"
                id="outlined-margin-normal"
                className={classes.textField}
                helperText="Pin"
                margin="normal"
                variant="outlined"
                multiline
                onChange={(e) =>
                  setUser({
                    ...user,
                    pin: e.target.value,
                  })
                }
              />
              <TextField
                label="Profile Role"
                id="outlined-margin-normal"
                defaultValue=""
                select
                className={classes.textField}
                helperText="Profile Role"
                margin="normal"
                variant="outlined"
                onChange={(e) =>
                  setUser({
                    ...user,
                    role: e.target.value,
                  })
                }
                required
              >
                <MenuItem key="roleId" value="roleId" disabled>
                  Profile Role Label
                </MenuItem>
                <MenuItem key="teacher" value="teacher">
                  Teacher
                </MenuItem>
                <MenuItem key="student" value="student">
                  Student
                </MenuItem>
              </TextField>
              <TextField
                label="Profile Title"
                id="outlined-margin-normal"
                className={classes.textField}
                helperText="Profile Title"
                margin="normal"
                variant="outlined"
                multiline
                onChange={(e) =>
                  setUser({
                    ...user,
                    title: e.target.value,
                  })
                }
              />
              {/*
  element Changes
*/}
              <div
                id="student"
                className={user.role == "student" ? "" : "hidden"}
              >
                <TextField
                  label="Course"
                  id="outlined-margin-normal"
                  onChange={(e) =>
                    setUser({
                      ...user,
                      courseId: e.target.value,
                    })
                  }
                  select
                  className={classes.textField}
                  helperText="Course"
                  margin="normal"
                  variant="outlined"
                >
                  <MenuItem key="courseId" value="courseId" disabled>
                    Course Label
                  </MenuItem>
                  {courses.map((course) => (
                    <MenuItem key={course._id} value={course._id}>
                      {course.courseName}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  label="Semester"
                  id="outlined-margin-normal"
                  onChange={(e) =>
                    setUser({
                      ...user,
                      semester: e.target.value,
                    })
                  }
                  className={classes.textField}
                  helperText="Semester"
                  margin="normal"
                  variant="outlined"
                  type="link"
                />
              </div>
              <div
                id="teacher"
                className={user.role == "teacher" ? "" : "hidden"}
              >
                <TextField
                  label="Current Position"
                  id="outlined-margin-normal"
                  onChange={(e) =>
                    setUser({
                      ...user,
                      curr_pos: e.target.value,
                    })
                  }
                  className={classes.textField}
                  helperText="Current Position"
                  margin="normal"
                  variant="outlined"
                  multiline
                />
                <TextField
                  label="Last Education"
                  id="outlined-margin-normal"
                  onChange={(e) =>
                    setUser({
                      ...user,
                      last_edu: e.target.value,
                    })
                  }
                  className={classes.textField}
                  helperText="Last Education"
                  margin="normal"
                  variant="outlined"
                  multiline
                />
                <TextField
                  label="Github Link"
                  id="outlined-margin-normal"
                  onChange={(e) =>
                    setUser({
                      ...user,
                      github: e.target.value,
                    })
                  }
                  className={classes.textField}
                  helperText="Github Link"
                  margin="normal"
                  variant="outlined"
                  type="link"
                />
                <TextField
                  label="LinkedIn Link"
                  id="outlined-margin-normal"
                  onChange={(e) =>
                    setUser({
                      ...user,
                      linkedIn: e.target.value,
                    })
                  }
                  className={classes.textField}
                  helperText="LinkedIn Link"
                  margin="normal"
                  variant="outlined"
                  type="link"
                />
              </div>
              {/* <RoleDiv setUser={setUser} user={user} /> */}
            </div>
            <Fab
              className={classes.textField}
              variant="contained"
              color="primary"
              type="submit"
            >
              Create
            </Fab>
            <Fab
              className={classes.textField}
              variant="contained"
              color="secondary"
              type="submit"
            >
              Update
            </Fab>
          </div>
        </form>
      </div>
    </div>
  );
}
