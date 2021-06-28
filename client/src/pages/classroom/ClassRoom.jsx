import "./classroom.css";
import React, { useEffect } from "react";
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
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CircularProgress from "@material-ui/core/CircularProgress";

import { Avatar, Button, Menu, MenuItem, Fade } from "@material-ui/core";
import { useDemoData } from "@material-ui/x-grid-data-generator";
import { MoreVert, Edit, Visibility, HighlightOff } from "@material-ui/icons";
import { courseRowData } from "../../dummydata.js";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import ListSubheader from "@material-ui/core/ListSubheader";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  createRoom,
  getClassRoom,
  getUnjoinedRoom,
  joinRoom,
  getSubjectRooms,
} from "../../actions/classroom";
import { getAllSubjects } from "../../actions/subject";
import { useHistory } from "react-router-dom";

export default function ClassRoom() {
  // Menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { sid } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const [show, setShow] = React.useState(false);
  const [roomNumber, setRoomNumber] = React.useState("");
  const [semester, setSemester] = React.useState(0);
  // window.alert(localStorage["role"]);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    if (localStorage["role"] === "teacher") {
      setRoomNumber(
        Date.now().toString() + sid + Math.floor(Math.random() * 100 + 1)
      );
    }

    setShow(true);
  };

  const [sub, setSub] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (sid) setSub(sid);
    const data = {
      roomNumber: roomNumber,
      semester: semester,
      subjectId: sub,
    };
    if (localStorage["role"] === "student") {
      dispatch(
        joinRoom({
          roomNumber: roomNumber,
        })
      );
      // window.alert(roomNumber);
    }
    if (localStorage["role"] === "teacher") {
      dispatch(createRoom(data));
    }
    setShow(false);
    // history.push("/notes");
    // createRoom;
  };
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
  // getSubjectRooms

  useEffect(() => {
    if (sid) {
      dispatch(getSubjectRooms({ subjectId: sid }));
    } else {
      dispatch(getClassRoom());
    }
    dispatch(getAllSubjects());
    if (localStorage["role"] === "student") dispatch(getUnjoinedRoom());
  }, [dispatch]);

  const rooms = useSelector((state) => state.classrooms);
  const subjects = useSelector((state) => state.subjects);
  // const rooms = useSelector((state) => state.classrooms);

  let nonrooms;
  nonrooms = useSelector((state) => state.nonclassrooms);
  console.log("nonrooms=>>>>>", nonrooms);
  //Modal
  return (
    <div className="room">
      <div className="courseTitleContainer">
        <h3 className="courseTitle">{"Class Room"}</h3>

        {localStorage["role"] != "admin" ? (
          <Button
            className="courseAddButton"
            variant="outlined"
            color="primary"
            data-bs-toggle="modal"
            data-bs-target="#createSubjectModal"
            data-bs-whatever="@cs"
            onClick={handleShow}
          >
            {localStorage["role"] === "teacher" ? "Create" : "Join"}
          </Button>
        ) : (
          ""
        )}

        {
          //Modal Start
        }
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Form method="POST" onSubmit={handleSubmit}>
            <Modal.Header closeButton>
              <Modal.Title> Room</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div class="form-row">
                {localStorage["role"] === "teacher" ? (
                  <div class={classes.root2}>
                    <TextField
                      label="Room Number"
                      id="roomNumber"
                      value={roomNumber}
                      className={classes.textField}
                      helperText="Room Number"
                      margin="normal"
                      variant="outlined"
                      readonly
                    />
                    <TextField
                      label="Semester"
                      onChange={(e) => setSemester(e.target.value)}
                      id="roomNumber"
                      className={classes.textField}
                      helperText="Semester"
                      type="number"
                      margin="normal"
                      variant="outlined"
                    />
                    {!sid ? (
                      <TextField
                        label="Subject"
                        id="Subjects"
                        value={sub}
                        className={classes.textField}
                        helperText="Room Number"
                        onChange={(e) => setSub(e.target.value)}
                        margin="normal"
                        variant="outlined"
                        select
                      >
                        <MenuItem key="courseId" value="courseId" disabled>
                          Select Subject{" "}
                        </MenuItem>
                        {subjects.map((item) => (
                          <MenuItem key={item._id} value={item._id}>
                            {item.subjectId}
                          </MenuItem>
                        ))}
                      </TextField>
                    ) : (
                      ""
                    )}
                  </div>
                ) : (
                  <div class={classes.root2}>
                    <TextField
                      label="Room Number"
                      id="roomNumber"
                      value={roomNumber}
                      className={classes.textField}
                      helperText="Room Number"
                      onChange={(e) => setRoomNumber(e.target.value)}
                      margin="normal"
                      variant="outlined"
                      select
                    >
                      <MenuItem key="courseId" value="courseId" disabled>
                        Select Room Number{" "}
                      </MenuItem>
                      {nonrooms.map((item) => (
                        <MenuItem key={item.roomNumber} value={item.roomNumber}>
                          {item.roomNumber}
                        </MenuItem>
                      ))}
                    </TextField>
                  </div>
                )}
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="contained" color="primary" type="submit">
                {localStorage["role"] === "teacher" ? "Create" : "Join"}
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
        {
          //Modal End
        }
      </div>
      <Container>
        <Row>
          <Col xs={12}>
            <Row>
              {!rooms.length ? (
                <CircularProgress />
              ) : (
                rooms.map((room) => (
                  <div>
                    <div xs={3} class=" card">
                      <h3>Subject: {room.subjectId.subjectName}</h3>
                      <p>Room: {room.roomNumber}</p>
                      <p> Sem: {room.semester}</p>
                      <Link to={"/room-notes/" + room._id}>
                        <p> Check Notes</p>
                      </Link>
                    </div>
                  </div>
                ))
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
