import React, { useState } from "react";
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

import Rating from "@material-ui/lab/Rating";
import clsx from "clsx";

import { red } from "@material-ui/core/colors";

import { Room } from "@material-ui/icons";

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
const StudentDiv = () => {
  const classes = useStyles();
  return (
    <>
      <TextField
        label="Course"
        id="outlined-margin-normal"
        defaultValue=""
        select
        className={classes.textField}
        helperText="Course"
        margin="normal"
        variant="outlined"
      >
        <MenuItem key="courseId" value="courseId" disabled>
          Course Label
        </MenuItem>
        <MenuItem key="courseId" value="courseId" >
          Java
        </MenuItem>
      </TextField>
      <TextField
        label="Semester"
        id="outlined-margin-normal"
        defaultValue=""
        className={classes.textField}
        helperText="Semester"
        margin="normal"
        variant="outlined"
        type="link"
      />
    </>
  );
};
const TeacherDiv = () => {
  const classes = useStyles();
  return (
    <div>
      <TextField
        label="Current Position"
        id="outlined-margin-normal"
        defaultValue="Current Position"
        className={classes.textField}
        helperText="Current Position"
        margin="normal"
        variant="outlined"
        multiline
      />
      <TextField
        label="Last Education"
        id="outlined-margin-normal"
        defaultValue="Last Education"
        className={classes.textField}
        helperText="Last Education"
        margin="normal"
        variant="outlined"
        multiline
      />
      <TextField
        label="Github Link"
        id="outlined-margin-normal"
        defaultValue="Github"
        className={classes.textField}
        helperText="Github Link"
        margin="normal"
        variant="outlined"
        type="link"
      />
      <TextField
        label="LinkedIn Link"
        id="outlined-margin-normal"
        defaultValue="LinkedIn"
        className={classes.textField}
        helperText="LinkedIn Link"
        margin="normal"
        variant="outlined"
        type="link"
      />
    </div>
  );
};

export default function UserCreate() {
  const classes = useStyles();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [user, setUser] = useState({
    roleId: "",
    name: "",
    phoneNumber: "",
    dob: "",
    courseId: "",
    bannerImage: "",
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
  
  const [role, setRole] = useState("");
  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };
  const RoleDiv = () => {
    if (role == "teacher") {
      return <TeacherDiv />;
    } else if (role == "student") {
      return <StudentDiv />;
    } else return "";
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
              />
              <TextField
                label="Full Name"
                id="outlined-margin-normal"
                defaultValue="Full Name"
                className={classes.textField}
                helperText="Full Name"
                margin="normal"
                variant="outlined"
              />
              <TextField
                label="Phone"
                type="number"
                id="outlined-margin-normal"
                defaultValue="00-0000000"
                className={classes.textField}
                helperText="Phone"
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                label="DOB"
                type="date"
                id="outlined-margin-normal"
                defaultValue="2017-05-24"
                className={classes.textField}
                helperText="DOB Date"
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <div class="clear"></div>{" "}
              <TextField
                label="Profile Image"
                id="outlined-margin-normal"
                type="file"
                className={classes.textField}
                helperText="Profile Image"
                margin="normal"
              />
              <TextField
                label="Cover Image"
                id="outlined-margin-normal"
                type="file"
                className={classes.textField}
                helperText="Cover Image"
                margin="normal"
              />
              <TextField
                label="City"
                id="outlined-margin-normal"
                defaultValue="City"
                className={classes.textField}
                helperText="City"
                margin="normal"
                variant="outlined"
                multiline
              />
              <TextField
                label="Pin"
                id="outlined-margin-normal"
                defaultValue="Pin"
                className={classes.textField}
                helperText="Pin"
                margin="normal"
                variant="outlined"
                multiline
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
                onChange={handleRoleChange}
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
              />
              {/*
  element Changes
*/}
              <RoleDiv />
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
