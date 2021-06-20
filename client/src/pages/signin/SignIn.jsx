import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Button, Fab, Card } from "@material-ui/core";
import { GetAppRounded, Close } from "@material-ui/icons";
import {
  Col,
  Row,
  Container,
  Form,
  FormCheck,
  FloatingLabel,
} from "react-bootstrap";import "./signin.css"
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { SignInForm, LogInForm } from "./form/Form";
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  header_m: {
    marginTop: theme.spacing(14),
  },
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container>
      <Row>
        <Col xs={12} className={classes.header_m}></Col>
      <Col className="form">
          <SignInForm />
          <LogInForm />
        </Col>
      </Row>
    </Container>
  );
}
