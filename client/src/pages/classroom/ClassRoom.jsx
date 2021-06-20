import "./classroom.css";
import * as React from "react";
import Modal from "react-bootstrap/Modal";
import ModalDialog from "react-bootstrap/ModalDialog";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
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
import Form from "react-bootstrap/Form";
// import FormControl from "react-bootstrap/FormControl";
// import FormCheck from "react-bootstrap/FormCheck";
// import FormFile from "react-bootstrap/FormFile";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

import { Avatar, Button, Menu, MenuItem, Fade } from "@material-ui/core";
import { useDemoData } from "@material-ui/x-grid-data-generator";
import { MoreVert, Edit, Visibility, HighlightOff } from "@material-ui/icons";
import { courseRowData } from "../../dummydata.js";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import ListSubheader from "@material-ui/core/ListSubheader";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
export default function ClassRoom() {
  // Menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  //Modal
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Avatar
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    root2: {
      display: "flex",
      flexWrap: "wrap",
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: "55ch",
    },
    selectField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: "50ch",
    },
  }));
  const classes = useStyles();
  // DataGrid
  const columns: GridColDef[] = [
    { field: "id", headerName: "Subject Id", width: 250 },

    {
      field: "subjectName",
      headerName: "Subject",
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

    { field: "courseId", headerName: "Course ", width: 250 },
    {
      field: "action",
      headerName: "Action",
      width: 300,
      renderCell: (param) => {
        return (
          <>

            <Edit color="disabled" />
            <HighlightOff color="secondary" title="Disband" />
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
        <h3 className="courseTitle">{"Subject Lists"}</h3>

        <Button
          className="courseAddButton"
          variant="outlined"
          color="primary"
          data-bs-toggle="modal"
          data-bs-target="#createSubjectModal"
          data-bs-whatever="@cs"
          onClick={handleShow}
        >
          Create
        </Button>
        {
          //Modal Start
        }
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Form method="POST">
            <Modal.Header closeButton>
              <Modal.Title>Add Subject</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div class="form-row">
                <div class={classes.root2}>
                  <TextField
                    label="Subject Id"
                    id="outlined-margin-normal"
                    defaultValue="Subject"
                    className={classes.textField}
                    helperText="Subject Id"
                    margin="normal"
                    variant="outlined"
                  />
                  <TextField
                    label="Subject Name"
                    id="outlined-margin-normal"
                    defaultValue="Subject Name"
                    className={classes.textField}
                    helperText="Subject Name"
                    margin="normal"
                    variant="outlined"
                  />
                  <FormControl className={classes.formControl}>
                     <InputLabel htmlFor="grouped-select">Course</InputLabel>
                    <Select

                      id="grouped-select"
                      className={classes.selectField}

                      margin="normal"
                      label="Course"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <ListSubheader>Category 1</ListSubheader>
                      <MenuItem value={1}>Option 1</MenuItem>
                      <MenuItem value={2}>Option 2</MenuItem>
                      <ListSubheader>Category 2</ListSubheader>
                      <MenuItem value={3}>Option 3</MenuItem>
                      <MenuItem value={4}>Option 4</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="contained" color="primary" onClick={handleClose}>
                Add Subject
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
        {
          //Modal End
        }
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
