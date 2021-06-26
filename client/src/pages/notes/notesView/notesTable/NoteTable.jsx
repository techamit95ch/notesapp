import "./notetable.css";
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
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";

export default function NoteTable({ data, roomId, setCurrentId }) {
  // Avatar
  // console.log(props);

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
    {
      field: "Note",
      headerName: "Note",
      width: 500,
      renderCell: (param) => {
        return (
          <div className={classes.root}>
            <Avatar>{param.row.header[0]}</Avatar>

            {param.row.header}
          </div>
        );
      },
    },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (param) => {
        return (
          <>
            <Visibility
              color="primary"
              onClick={() => setCurrentId(param.row.id)}
            />
            <HighlightOff color="secondary" title="Disband" />
          </>
        );
      },
    },
  ];
  const notes = data.map((item) => {
    const container = {};
    container["id"] = item._id;
    container["header"] = item.header;
    // container["subjectName"] = item.subjectName;
    return container;
  });
  const rows: GridRowsProp = notes;
  // console.log(data);
  return (
    <Container style={{ width: "100%" }} className="notetable">
      <Row className="courseTitleContainer">
        <h3 className="courseTitle">{"Note Lists"}</h3>
      </Row>
      <DataGrid
        rows={rows}
        disableSelectionOnclick
        columns={columns}
        pageSize={20}
      />
    </Container>
  );
}
