import "./userlist.css";
import * as React from "react";
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
// import useStyles from "./styles";
import useStyles from "./style";

import { getCourses } from "../../actions/course";
// import { AllProfile } from "../../actions/profile2";
import { AllProfile } from "../../actions/profie2";

import { useSelector, useDispatch } from "react-redux";
import Cards from "./cards/cards";
import { Grid, CircularProgress } from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";

export default function UserList() {
  // Menu
  const dispatch = useDispatch();
  const location = useLocation();
  // console.log(location.pathname);
  const history = useHistory();
  React.useEffect(() => {
    dispatch(getCourses());
    dispatch(AllProfile());
    // dispatch(getClassRoom());
    //  dispatch(getNotes());
  }, [dispatch]);
  const courses = useSelector((state) => state.course);
  const profiles = useSelector((state) => state.profile);
  // const courses = useSelector((state) => state.course);
  console.log(courses);
  const classes = useStyles();
  const [user, setUser] = React.useState("");
  console.log(location.pathname);
  return (
    <div style={{ width: "100%" }} className="course">
      <div className="courseTitleContainer">
        <h3 className="courseTitle">{"User Lists"}</h3>

        {/* <Button className="courseAddButton" variant="outlined" color="primary">
          <Link to="/user/create">Create</Link>
        </Button> */}
      </div>

      {/* <DataGrid
        rows={rows}
        disableSelectionOnclick
        columns={columns}
        pageSize={10}
      /> */}
      <div className="">
        {profiles.length === 0 ? (
          <CircularProgress />
        ) : (
          <Grid
            className={classes.container}
            container
            alignItems="stretch"
            spacing={3}
          >
            {location.pathname === "/users/professor" ? (
              <>
                {profiles.map((pro) =>
                  pro.role === "teacher" ? (
                    <Grid key={pro._id} item xs={12} sm={6} md={6}>
                      <Cards course={pro} />
                    </Grid>
                  ) : (
                    ""
                  )
                )}
              </>
            ) : (
              <>
                {profiles.map((pro) =>
                  pro.role === "student" ? (
                    <Grid key={pro._id} item xs={12} sm={6} md={6}>
                      <Cards course={pro} />
                    </Grid>
                  ) : (
                    ""
                  )
                )}
              </>
            )}
          </Grid>
        )}
      </div>
    </div>
  );
}
