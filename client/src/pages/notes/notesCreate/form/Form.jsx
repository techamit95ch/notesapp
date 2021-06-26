import React, { useState, Component } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Button, Fab, TextField, Input } from "@material-ui/core";
import { GetAppRounded, Close } from "@material-ui/icons";
import {
  Col,
  Row,
  Container,
  Form,
  FormControl,
  FormCheck,
  FloatingLabel,
} from "react-bootstrap";
import "./style.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import FileBase from "react-file-base64";
import { useSelector, useDispatch } from "react-redux";
import {
  noteTextCreate,
  noteBase64tCreate,
  createFileNote,
} from "../../../../actions/notes.js";
import { withRouter } from "react-router";
import { useHistory } from "react-router-dom";
import { browserHistory } from "react-router";
import Alert from "@material-ui/lab/Alert";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
// import { useHistory } from "react-router-dom";

let isDirty = false;
const useStyles = makeStyles((theme) => ({
  avatarImg: {
    position: "relative",
    height: "95%",
    margin: "0",
  },
}));
export const DefaultView = (props) => {
  const classes = useStyles();
  return (
    <Container>
      <Row>
        <Col></Col>
      </Row>
    </Container>
  );
};
export const ImgView = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  // const [image, setImage] = useState({
  //   selectedFile: null,
  // });
  const [header, setHeader] = useState();
  // const handleChange = (e) => {
  //   e.preventDefault();
  //   // console.log(e.target.value);
  //   const fileName = e.target.value;
  //   const idxDot = fileName.lastIndexOf(".") + 1;
  //   const extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
  //   if (extFile == "jpg" || extFile == "jpeg") {
  //     //TO DO
  //     setImage({
  //       selectedFile: e.target.files[0],
  //       loaded: 0,
  //     });
  //   } else {
  //     e.target.value = "";
  //   }
  // };
  const [img, setImg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // const formData = new FormData();
    // formData.append("file", image.selectedFile);
    // formData.append("roomId", props.roomId);
    // formData.append("noteType", "image");
    // formData.append("header", "header");
    // dispatch(createFileNote(formData));
    const data = {
      textdata: img,
      roomId: props.roomId,
      noteType: "img",
      header: header,
    };
    dispatch(noteBase64tCreate(data));
    history.push("/room-notes/" + props.roomId);
    // history.push("/room-notes/" + props.roomId);
  };
  const classes = useStyles();
  return (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formGroupEmail">
              <TextField
                label="Note Name"
                id="outlined-margin-normal"
                className={classes.textField}
                helperText="Note Name"
                margin="normal"
                variant="outlined"
                onChange={(e) => setHeader(e.target.value)}
                required
              />
              <br />
              <Form.Label>Upload Jpeg Image Only: </Form.Label>
              <br />
              {/* <Input
                label=" Image"
                id="image"
                type="file"
                helperText="Image"
                margin="normal"
                accept=".jpg, .jpeg , image/jpeg"
                onChange={handleChange}
              /> */}
              <div className={classes.fileInput}>
                {/* <div className=""> */}
                <FileBase
                  label="Img"
                  id="Img"
                  type="file"
                  helperText="Course Img"
                  margin="normal"
                  onDone={(e) => {
                    // console.log(e);
                    const type = e.type;

                    console.log(type);
                    if (type == "image/jpeg" || type == "image/jpg") {
                      setImg(e.base64);
                    } else {
                      e.name = "";
                      e.base64 = "";
                    }
                  }}
                />{" "}
              </div>
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Fab
                variant="extended"
                color="success"
                aria-label="add"
                type="submit"
              >
                Submit
              </Fab>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export const DocView = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [header, setHeader] = useState();
  const [doc, setDoc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      textdata: doc,
      roomId: props.roomId,
      noteType: "doc",
      header: header,
    };
    dispatch(noteBase64tCreate(data));
    history.push("/room-notes/" + props.roomId);
  };
  const classes = useStyles();
  return (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formGroupEmail">
              <TextField
                label="Note Name"
                id="outlined-margin-normal"
                className={classes.textField}
                helperText="Note Name"
                margin="normal"
                variant="outlined"
                onChange={(e) => setHeader(e.target.value)}
                required
              />
              <br />
              <Form.Label>Upload Doc Only: </Form.Label>
              <br />

              <div className={classes.fileInput}>
                {/* <div className=""> */}
                <FileBase
                  label="Doc"
                  id="Doc"
                  type="file"
                  helperText="Course ImDocg"
                  margin="normal"
                  onDone={(e) => {
                    // console.log(e);
                    const type = e.type;

                    // console.log(type);
                    if (
                      type ==
                      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    ) {
                      setDoc(e.base64);
                    } else {
                      e.name = "";
                      e.base64 = "";
                      window.alert("Not Valid Format");
                    }
                  }}
                />{" "}
              </div>
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Fab
                variant="extended"
                color="success"
                aria-label="add"
                type="submit"
              >
                Submit
              </Fab>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export const PdfView = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [pdf, setPdf] = useState("");
  // const [pdf2, setPdf2] = useState("");
  const [header, setHeader] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("textdata", pdf);
    // formData.append("file", pdf.selectedFile);
    formData.append("roomId", props.roomId);
    formData.append("noteType", "pdf");
    formData.append("header", header);
    const data = {
      textdata: pdf,
      roomId: props.roomId,
      noteType: "pdf",
      header: header,
    };
    dispatch(noteBase64tCreate(data));
    history.push("/room-notes/" + props.roomId);
  };
  const classes = useStyles();
  return (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formGroupEmail">
              <TextField
                label="Note Name"
                id="outlined-margin-normal"
                className={classes.textField}
                helperText="Note Name"
                margin="normal"
                variant="outlined"
                onChange={(e) => setHeader(e.target.value)}
                required
              />
              <br />
              <Form.Label>Upload PDF</Form.Label>
              <br />
              <div className={classes.fileInput}>
                {/* <div className=""> */}
                <FileBase
                  label="Pdf"
                  id="pdf"
                  type="file"
                  helperText="Course Pdf"
                  margin="normal"
                  onDone={
                    ({ base64 }) => {
                      // console.log(e.target.value);
                      const ext = base64.split(";")[0].split("/")[1];
                      // console.log(type);
                      if (ext == "pdf") {
                        setPdf(base64);
                      }
                    }
                    // setCourseData({ ...courseData, courseImg: base64 })
                  }
                />{" "}
                {/* </div> */}
              </div>
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Fab
                variant="extended"
                color="success"
                aria-label="add"
                type="submit"
              >
                Submit
              </Fab>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export const MediaView = (props) => {
  const classes = useStyles();
  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <Form.Label>Link address</Form.Label>
            <Form.Control type="link" placeholder=" video Link" />
            <Form.Text className="text-muted">
              Provide exact video url from iframe src of the video
            </Form.Text>
            <Form.Group controlId="formGroupPassword">
              <Fab
                variant="extended"
                color="success"
                aria-label="add"
                type="submit"
              >
                Submit
              </Fab>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export class EditorView extends Component {
  formData = null;
  editor = null;
  // const [open, setOpen] = React.useState(true);
  // this.state.open=false;
  handleSubmit = (event) => {
    // dispatch = useDispatch();
    event.preventDefault();
    const data = {
      textdata: this.formData,
      roomId: this.props.roomId,
      noteType: "text",
    };
    noteTextCreate(data);
    this.formData = null;

    // this.props.history.goBack(); //react-router (v4)
    window.alert("Note Saved");
    // console.log(data);
  };
  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          {/* <Alert
            iconMapping={{
              success: <CheckCircleOutlineIcon fontSize="inherit" />,
            }}
          >
            Data Saved
          </Alert> */}
          <Col sm={12}>
            <CKEditor
              className="form-control"
              onReady={(editor) => {
                editor.ui
                  .getEditableElement()
                  .parentElement.insertBefore(
                    editor.ui.view.toolbar.element,
                    editor.ui.getEditableElement()
                  );
                this.editor = editor;
              }}
              onError={({ willEditorRestart }) => {
                if (willEditorRestart) {
                  this.editor.ui.view.toolbar.element.remove();
                }
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                this.formData = data;
              }}
              editor={DecoupledEditor}
              data=""
            />
          </Col>
          <Row>
            <Col sm={12}>
              <Col sm={9}></Col>
              <Col sm={3} float="right">
                <Fab
                  variant="extended"
                  color="primary"
                  aria-label="add"
                  type="submit"
                >
                  Submit
                </Fab>
              </Col>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}
