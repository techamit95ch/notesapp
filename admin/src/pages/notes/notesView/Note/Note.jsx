import "./note.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  VDialogImg,
  VDialogPDF,
  VDialogText,
  VDialogWord,
} from "./vdialog/VDialog";
import {
  CardMedia,
  Card,
  Avatar,
  Button,
  Menu,
  MenuItem,
  Fade,
  CardHeader,
  CardActions,
  CardContent,
  Typography,
  Dialog,
  AppBar,
  IconButton,
  Toolbar,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
// import { Link } from "react-router-dom";
import { GetAppRounded, Close } from "@material-ui/icons";
import { Col, Row, Container } from "react-bootstrap";
import PictureAsPdfRoundedIcon from "@material-ui/icons/PictureAsPdfRounded";
import PanoramaRoundedIcon from "@material-ui/icons/PanoramaRounded";
import TextFieldsRoundedIcon from "@material-ui/icons/TextFieldsRounded";
import DescriptionIcon from "@material-ui/icons/Description";
import PrintIcon from "@material-ui/icons/Print";
import $ from "jquery";
import { useDispatch, useSelector } from "react-redux";
import { getNote, getSingleNote } from "../../../../actions/notes";
import CircularProgress from "@material-ui/core/CircularProgress";
import moment from "moment";
import Iframe from "react-iframe";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  backgroundColor: "#24292e",
}));
export default function Note({ roomId, currentId }) {
  const [imageopen, setImagepen] = useState(false);
  const [pdfopen, setPDFOpen] = useState(false);
  const [textOpen, setTextOpen] = useState(false);
  const [wordOpen, setWordOpen] = useState(false);
  const handleClickOpen = (prop) => {
    if (prop == "image") setImagepen(true);
    if (prop == "pdf") setPDFOpen(true);
    if (prop == "text") setTextOpen(true);
    if (prop == "word") setWordOpen(true);
  };
  const handleClose = () => {
    setImagepen(false);
    setPDFOpen(false);
    setTextOpen(false);
    setWordOpen(false);
  };
  const handlePrint = () => {};
  const classes = useStyles();
  const img =
    "https://s3.amazonaws.com/cdn-media-1.freecodecamp.org/ghost/2019/05/java.jpg";
  const pdf =
    "https://docs.spring.io/spring-framework/docs/5.0.0.M1/spring-framework-reference/pdf/spring-framework-reference.pdf";
  const word =
    "https://view.officeapps.live.com/op/embed.aspx?src=http%3A%2F%2Fieee802%2Eorg%3A80%2Fsecmail%2FdocIZSEwEqHFr%2Edoc";
  const dispatch = useDispatch();
  const [noteData, setNoteData] = useState({
    header: "",
    createdAt: "",
    data: "",
    noteType: "",
  });

  const note = useSelector((state) =>
    currentId ? state.notes.find((message) => message._id === currentId) : null
  );
  useEffect(() => {
    if (note) setNoteData(note);
  }, [note]);

  return (
    <Container className="note">
      <Row className="courseTitleContainer">
        {/* {currentId} */}
        {localStorage["role"] === "teacher" ? (
          <Button
            className="courseAddButton"
            variant="outlined"
            color="primary"
          >
            <Link to={"/note-create/" + roomId}>Create</Link>
          </Button>
        ) : (
          ""
        )}
      </Row>
      <Row>
        <Col sm={12}>
          {!currentId ? (
            <CircularProgress disableShrink />
          ) : (
            <Card>
              <CardHeader
                title={noteData.header}
                subheader={moment(noteData.createdAt).fromNow()}
              />
              {/* <CardMedia
                component="img"
                alt={noteData.header}
                height="140"
                image={noteData.data}
                title={noteData.header}
              /> */}
              {noteData.noteType == "img" ? (
                <object>
                  <Iframe
                    src={noteData.data}
                    width="450px"
                    height="450px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"
                  />
                </object>
              ) : (
                <CircularProgress disableShrink />
              )}
              {/* <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  {"Teacher Name"}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                  {"Subject Name"}
                </Typography>
              </CardContent> */}
              <CardActions>
                {/* {data.type=="img")}?  */}
                {noteData.noteType == "img" ? (
                  <PanoramaRoundedIcon
                    onClick={() => handleClickOpen("image")}
                    color="primary"
                  />
                ) : (
                  ""
                )}
                {noteData.noteType == "pdf" ? (
                  <PictureAsPdfRoundedIcon
                    onClick={() => handleClickOpen("pdf")}
                    color="primary"
                  />
                ) : (
                  ""
                )}

                {noteData.noteType == "doc" ? (
                  <DescriptionIcon
                    onClick={() => handleClickOpen("word")}
                    color="primary"
                  />
                ) : (
                  ""
                )}
                {noteData.noteType == "text" ? (
                  <TextFieldsRoundedIcon
                    onClick={() => handleClickOpen("text")}
                    color="primary"
                  />
                ) : (
                  ""
                )}

                {/* <Link to={pdf} target="_blank" download>
                  <GetAppRounded color="primary" />
                </Link> */}

                <Dialog fullScreen open={imageopen} onClose={handleClose}>
                  <DialogTitle className={classes.appBar}>
                    <Close onClick={handleClose} color="primary" />
                  </DialogTitle>
                  <VDialogImg path={noteData.data} />
                </Dialog>
                <Dialog fullScreen open={pdfopen} onClose={handleClose}>
                  <DialogTitle className={classes.appBar}>
                    <Close onClick={handleClose} color="inherit" />
                  </DialogTitle>
                  <VDialogPDF path={noteData.data.toString()} />
                </Dialog>
                <Dialog fullScreen open={textOpen} onClose={handleClose}>
                  <DialogTitle className={classes.appBar}>
                    <Close onClick={handleClose} color="inherit" />
                  </DialogTitle>
                  <VDialogText data={noteData.data} />
                </Dialog>
                <Dialog fullScreen open={wordOpen} onClose={handleClose}>
                  <DialogTitle className={classes.appBar}>
                    <Close onClick={handleClose} color="inherit" />
                  </DialogTitle>
                  <VDialogWord path={noteData.data} />
                </Dialog>
              </CardActions>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
}
