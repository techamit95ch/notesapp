import "./subject.css";
import React, { useState, useEffect } from "react";
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
import InputIcon from "@material-ui/icons/Input";
import { useParams } from "react-router-dom";
import { createSubject, getSubjects } from "../../actions/subject";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function Subject() {
  //
  const { cid } = useParams();

  const dispatch = useDispatch();

  const [idx, setIdx] = React.useState(cid);

  useEffect(() => {
    // console.log(cid);
    dispatch(getSubjects(idx));
  }, [dispatch]);
  const subjects = useSelector((state) => state.subject);

  // console.log(subjects);
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
    { field: "subjectId", headerName: "Subject Id", width: 250 },

    {
      field: "subjectName",
      headerName: "Subject",
      width: 350,
      renderCell: (param) => {
        return (
          <div className={classes.root}>
            <Avatar src={param.row.avatar}>{param.row.subjectName[0]}</Avatar>
            {param.row.subjectName}
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 300,
      renderCell: (param) => {
        return (
          <>
            <Edit color="disabled" />
            <HighlightOff color="secondary" title="Disband" />
            <Link to={"/classroom/" + param.row.id}>
              {" "}
              <InputIcon color="#1D2229" />
            </Link>
          </>
        );
      },
    },
  ];
  const [subjectData, setSubjectData] = useState({
    subjectId: "",
    subjectName: "",
    courseId: cid,
  });
  // const rows: GridRowsProp = courseRowData;
  // console.log(subjects);
  const sbj = subjects.map((item) => {
    const container = {};
    container["id"] = item._id;
    container["subjectId"] = item.subjectId;
    container["subjectName"] = item.subjectName;
    return container;
  });
  console.log(sbj);
  const rows: GridRowsProp = sbj;
  const handleSubjectSubmit = (e) => {
    e.preventDefault();

    createSubject(subjectData);
    setSubjectData({ subjectId: "", subjectName: "", courseId: cid });
    handleClose();
  };

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
          <Form method="POST" onSubmit={handleSubjectSubmit}>
            <Modal.Header closeButton>
              <Modal.Title>Add Subject</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div class="form-row">
                <div class={classes.root2}>
                  <TextField
                    label="Subject Id"
                    id="outlined-margin-normal"
                    className={classes.textField}
                    helperText="Subject Id"
                    margin="normal"
                    variant="outlined"
                    onChange={(e) => {
                      setSubjectData({
                        ...subjectData,
                        subjectId: e.target.value,
                      });
                    }}
                  />
                  <TextField
                    label="Subject Name"
                    id="outlined-margin-normal"
                    className={classes.textField}
                    helperText="Subject Name"
                    margin="normal"
                    variant="outlined"
                    onChange={(e) => {
                      setSubjectData({
                        ...subjectData,
                        subjectName: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="contained" color="primary" type="submit">
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
