import "./courselist.css";
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
import InputIcon from '@material-ui/icons/Input';
export default function CourseList() {
  // Menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Avatar
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  }));
  const classes = useStyles();
  // DataGrid
  const columns: GridColDef[] = [
    { field: "id", headerName: "#", width: 100 },

    {
      field: "courseName",
      headerName: "Course",
      width: 350,
      renderCell: (param) => {
        return (
          <div className={classes.root}>
            <Avatar src={param.row.avatar}>{param.row.courseName[0]}</Avatar>

            {param.row.courseName}
          </div>
        );
      },
    },

    {
      field: "st_no",
      headerName: "Total Students",
      type: "number",
      width: 200,
    },
    { field: "status", headerName: "Status", width: 150 },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (param) => {
        return (
          <>
            <Link to={"/course/" + param.row.id}>
              <Visibility color="primary" />
              <Edit color="disabled" />
            </Link>
            <HighlightOff color="secondary" title="Disband" />
            <Link to={"/subject/"}> <InputIcon color="#1D2229"/></Link>
          </>
        );
      },
    },
  ];

  const rows: GridRowsProp = courseRowData;
  // const { data } = useDemoData({
  //   dataSet: "Commodity",
  //   rowLength: 10,
  //   maxColumns: 6,
  // });

  return (
    <div style={{ width: "100%" }} className="course">
      <div className="courseTitleContainer">
        <h3 className="courseTitle">{"Course Lists"}</h3>

        <Button
          className="courseAddButton"
          variant="outlined"
          color="primary"
        ><Link to="/course/">
          Create</Link>
        </Button>
      </div>

      <DataGrid
        rows={rows}
        disableSelectionOnclick
        columns={columns}
        pageSize={10}
      />
    </div>
  );
}
