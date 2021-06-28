import "./courselist.css";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Rating } from "@material-ui/lab";
import { Link } from "react-router-dom";
import {
  DataGrid,
  getGridNumericColumnOperators,
  GridRowsProp,
  GridColDef,
} from "@material-ui/data-grid";
// import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Button, Menu, MenuItem, Fade } from "@material-ui/core";
import { useDemoData } from "@material-ui/x-grid-data-generator";
import { MoreVert, Edit, Visibility, HighlightOff } from "@material-ui/icons";
import { courseRowData } from "../../dummydata.js";
import InputIcon from "@material-ui/icons/Input";
import { useSelector, useDispatch } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";
import Cards from "./cards/cards";
import useStyles from "./styles";
import { getCourses } from "../../actions/course";

const CourseList = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourses());
    // dispatch(getClassRoom());
    //  dispatch(getNotes());
  }, [dispatch]);
  const courses = useSelector((state) => state.course);
  console.log(courses);
  const classes = useStyles();
  return (
    <div className="course">
      <div className="courseTitleContainer">
        <h3 className="courseTitle">{"Course Lists"}</h3>
        {localStorage.getItem("role") === "admin" ? (
          <Button
            className="courseAddButton"
            variant="outlined"
            color="primary"
          >
            <Link to="/course/">Create</Link>
          </Button>
        ) : (
          ""
        )}
      </div>
      <hr />
      <div className="">
        {courses.length === 0 ? (
          <CircularProgress />
        ) : (
          <Grid
            className={classes.container}
            container
            alignItems="stretch"
            spacing={3}
          >
            {courses.map((course) => (
              <Grid key={course._id} item xs={12} sm={6} md={6}>
                <Cards course={course} />
              </Grid>
            ))}
          </Grid>
        )}
      </div>
    </div>
  );
};
export default CourseList;
