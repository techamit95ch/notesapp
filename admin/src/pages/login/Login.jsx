import React ,{ useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Col,
  Row,
  Container,
  Form,
  FormCheck,
  FloatingLabel,
} from "react-bootstrap";
import "./style.css";

import { LogInForm } from "./form/Form";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  header_m: {
    marginTop: theme.spacing(14),
  },
}));

export default function Login() {
  const classes = useStyles();
  return (
    <Container>
      <Row>
        <Col xs={12} className={classes.header_m}></Col>
        <Col className="form">
          <LogInForm />
          
        </Col>
      </Row>
    </Container>
  );
}
