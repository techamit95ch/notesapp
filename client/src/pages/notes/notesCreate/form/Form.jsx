import React, { useState, Component } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Button,Fab } from "@material-ui/core";
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
  const classes = useStyles();
  return (
    <Container>
      <Row>
        <Col>
          <Form>
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Upload Image</Form.Label>
    <div className={classes.fileInput}>
            <FileBase
              type="file"
              multiple={false}
              name="selectedFile"
              onDone={
                ""
                // ({ base64 }) =>
                // setPostData({ ...postData, selectedFile: base64 })
              }
            />
          </div>
  </Form.Group>
  <Form.Group controlId="formGroupPassword">

    <Fab variant="extended" color="success" aria-label="add" type="submit">Submit</Fab>
  </Form.Group>
</Form>

        </Col>
      </Row>
    </Container>
  );
};
export const PdfView = (props) => {
  const classes = useStyles();
  return (
    <Container>
      <Row>
        <Col>
          <Form>
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Upload PDF</Form.Label>
    <div className={classes.fileInput}>
            <FileBase
              type="file"
              multiple={false}
              name="selectedFile"
              onDone={
                ""
                // ({ base64 }) =>
                // setPostData({ ...postData, selectedFile: base64 })
              }
            />
          </div>
  </Form.Group>
  <Form.Group controlId="formGroupPassword">

    <Fab variant="extended" color="success" aria-label="add" type="submit">Submit</Fab>
  </Form.Group>
</Form>

        </Col>
      </Row>
    </Container>
  );
};
export const DocView = (props) => {
  const classes = useStyles();
  return (
    <Container>
      <Row>
        <Col>
          <Form>
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Upload Doc</Form.Label>
    <div className={classes.fileInput}>
            <FileBase
              type="file"
              multiple={false}
              name="selectedFile"
              onDone={
                ""
                // ({ base64 }) =>
                // setPostData({ ...postData, selectedFile: base64 })
              }
            />
          </div>
  </Form.Group>
  <Form.Group controlId="formGroupButton">

    <Fab variant="extended" color="success" aria-label="add" type="submit">Submit</Fab>
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

    <Fab variant="extended" color="success" aria-label="add" type="submit">Submit</Fab>
  </Form.Group>
  </Form>

        </Col>
      </Row>
    </Container>
  );
  };

export class EditorView extends Component {
  // const classes = useStyles();
  formData = null;
  editor = null;
  handleSubmit=(event)=>{
    event.preventDefault();
    const data = { textdata: this.formData, roomId: this.props.roomId };    
    console.log(data);
  }
  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}><Col sm={12}>
        <CKEditor className="form-control"

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
             this.formData= data;
          }}
          editor={DecoupledEditor}
          data=""
        /></Col><Row><Col sm={12}>
      <Col sm={9}></Col>
    <Col sm={3} float="right">
      <Fab variant="extended" color="primary" aria-label="add" type="submit">Submit</Fab>
  </Col></Col></Row>
  </Form>
      </Container>
    );
  }
}
