import React, { useState, Component } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import { Avatar, Button } from "@material-ui/core";
import { GetAppRounded, Close } from "@material-ui/icons";
import { Col, Row, Container } from "react-bootstrap";
import "./style.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";

let isDirty = false;

// import PDF from "./Resume_1.pdf";
const useStyles = makeStyles((theme) => ({
  avatarImg: {
    position: "relative",
    height: "95%",
    margin: "0",
  },
}));

export const VDialogImg = (props) => {
  const classes = useStyles();
  console.log(props.path);
  return <img className={classes.avatarImg} src={props.path} />;
};
export const VDialogPDF = ({ path }) => {
  const classes = useStyles();
  console.log(path);
  return (
    // <iframe
    //   src={path}
    //   type="application/pdf"
    //   className={classes.avatarImg}
    // ></iframe>
    <iframe
      src={path}
     
      className={classes.avatarImg}
    ></iframe>
  );
};
export class VDialogText extends Component {
  // const classes = useStyles();

  editor = null;
  render() {
    return (
      <CKEditor
        className="avatarImg"
        onReady={(editor) => {
          console.log("Editor is ready to use!", editor);

          // Insert the toolbar before the editable area.
          editor.ui
            .getEditableElement()
            .parentElement.insertBefore(
              editor.ui.view.toolbar.element,
              editor.ui.getEditableElement()
            );

          this.editor = editor;
        }}
        onError={({ willEditorRestart }) => {
          // If the editor is restarted, the toolbar element will be created once again.
          // The `onReady` callback will be called again and the new toolbar will be added.
          // This is why you need to remove the older toolbar.
          if (willEditorRestart) {
            this.editor.ui.view.toolbar.element.remove();
          }
        }}
        onChange={(event, editor) => console.log({ event, editor })}
        editor={DecoupledEditor}
        data={this.props.data}
      />
    );
  }
}
export const VDialogWord = (props) => {
  const classes = useStyles();
  return <iframe src={props.path} className={classes.avatarImg}></iframe>;
};
