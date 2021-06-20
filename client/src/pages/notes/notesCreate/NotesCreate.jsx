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
export default function NotesCreate() {
  const [key, setKey] = useState("home");
  return (
    <Container className="notescreate">
      <Row>
        <Col sm={12}>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
          >
            <Tab
              eventKey="chooseNote"
              title="Choose Note"
              disabled
              activeKey={false}
            >
              <DefaultView />
            </Tab>
            <Tab eventKey="editor" title="Editor">
              <EditorView />
            </Tab>
            <Tab eventKey="image" title="Image">
              <ImgView />
            </Tab>
            <Tab eventKey="doc" title="Doc">
              <DocView />
            </Tab>
            <Tab eventKey="pdf" title="Pdf">
              <PdfView />
            </Tab>
            <Tab eventKey="media" title="Media">
              <MediaView />
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
}
