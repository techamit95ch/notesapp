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
export default function UserList() {
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
    { field: "uid", headerName: "User id", width: 150 },

    {
      field: "fullname",
      headerName: "User",
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
      field: "email",
      headerName: "Email",

      width: 350,
    },
    {
      field: "action",
      headerName: "Action",
      width: 185,
      renderCell: (param) => {
        return (
          <>
            <Link to={"/user/" + param.row.id}>
              <Visibility color="primary" />
              <Edit color="disabled" />
            </Link>
            <HighlightOff color="secondary" title="Block" />
          </>
        );
      },
    },
  ];

  const rows: GridRowsProp = courseRowData;


  return (
    <div style={{ width: "100%" }} className="course">
      <div className="courseTitleContainer">
        <h3 className="courseTitle">{"User Lists"}</h3>

        <Button
          className="courseAddButton"
          variant="outlined"
          color="primary"
        ><Link to="/user/create">
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
