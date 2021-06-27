import "./notescreate.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import {
  DefaultView,
  ImgView,
  PdfView,
  DocView,
  EditorView,
  MediaView,
} from "./form/Form";
import { Avatar, Button, Menu, MenuItem, Fade } from "@material-ui/core";
import {
  NavDropdown,
  TabPane,
  TabContent,
  TabContainer,
  Tab,
  Tabs,
  Nav,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
// import { browserHistory } from "react-router";
// import { browserHistory } from "react-router";

export default function NotesCreate() {
  const { roomId } = useParams();
  const history = useHistory();
  // const browserHistory = browserHistory();
  const [key, setKey] = useState("home");
  return (
    <Container className="notescreate">
      <Row>
        <Col sm={12}>
          {/* <Link to={"/room-notes/" + roomId}> */}
          <Button
            color="primary"
            onClick={() => history.replace("/room-notes/" + roomId)}
          >
            Back
          </Button>
          {/* </Link> */}
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
          >
            <Tab eventKey="chooseNote" title="ChooseNote" disabled>
              <Link to={"/room-notes/" + roomId}>
                <DefaultView />
              </Link>
            </Tab>

            <Tab
              eventKey="editor"
              history={history}
              // browserHistory={browserHistory}
              title="Editor"
            >
              <EditorView roomId={roomId} />
            </Tab>
            <Tab eventKey="image" title="Image">
              <ImgView roomId={roomId} />
            </Tab>
            {/* <Tab eventKey="doc" title="Doc">
              <DocView roomId={roomId} />
            </Tab>
            <Tab eventKey="pdf" title="Pdf">
              <PdfView roomId={roomId} />
            </Tab> */}
            {/* <Tab eventKey="media" title="Media">
              <MediaView roomId={roomId} />
            </Tab> */}
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
}
