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
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

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
import { createRoom } from "../../actions/classroom";
import { useHistory } from "react-router-dom";

export default function ClassRoom() {
  // Menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { sid } = useParams();
  const history =useHistory();
  //Modal
  const [show, setShow] = React.useState(false);
  const [roomNumber, setRoomNumber] = React.useState(0);
  const [semester, setSemester] = React.useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setRoomNumber(
      Date.now().toString() + sid + Math.floor(Math.random() * 100 + 1)
    );
    setShow(true);
  };
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      roomNumber: roomNumber,
      semester: semester,
      subjectId: sid,
      
    };
    dispatch(createRoom(data));
    history.push("/notes");
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

  return (
    <div className="room">
      <div className="courseTitleContainer">
        <h3 className="courseTitle">{"Class Room"}</h3>

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
          <Form method="POST" onSubmit={handleSubmit}>
            <Modal.Header closeButton>
              <Modal.Title>Add Room</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div class="form-row">
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
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="contained" color="primary" type="submit">
                create
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
              <div>
                <div xs={3} class=" card">
                  <h3>Card 1</h3>
                  <p>Some text</p>
                  <p>Some text</p>
                </div>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
