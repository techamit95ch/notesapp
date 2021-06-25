import "./notesview.css";
import NoteTable from "./notesTable/NoteTable";
import Note from "./Note/Note";
import * as React from "react";
import { Link } from "react-router-dom";
import { courseRowData } from "../../../dummydata.js";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Avatar, Button, Menu, MenuItem, Fade } from "@material-ui/core";
import { useParams } from "react-router-dom";

export default function NotesView() {
  const { roomId } = useParams();
  return (
    <Container className="notesview">
      <NoteTable data={courseRowData} roomId={roomId} />
      <Note roomId={roomId} />
    </Container>
  );
}
