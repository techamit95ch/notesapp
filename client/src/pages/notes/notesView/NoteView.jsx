import "./notesview.css";
import NoteTable from "./notesTable/NoteTable";
import Note from "./Note/Note";
import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { courseRowData } from "../../../dummydata.js";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Avatar, Button, Menu, MenuItem, Fade } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { getNotes } from "../../../actions/notes";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function NotesView() {
  const { roomId } = useParams();
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);
  useEffect(() => {
    dispatch(getNotes({ roomId: roomId }));
    //   // dispatch(getClassRoom());
  }, [dispatch, currentId]);
  const notes = useSelector((state) => state.notes);
  const history = useHistory();
  return (
    <Container className="notesview">
      
      <NoteTable data={notes} roomId={roomId} setCurrentId={setCurrentId} />
      <Note roomId={roomId} currentId={currentId} />
    </Container>
  );
}
