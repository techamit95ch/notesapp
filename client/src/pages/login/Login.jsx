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
  header_m: {
    marginTop: theme.spacing(14),
    
  },
}));

export default function Login() {
  const classes = useStyles();
  return (
    // <Container>
    //   <Row>
    <Col className="form">
      <Col style={{ marginLeft: "80px", marginRight: "-80px" }}>
        <Col xs={12} className={classes.header_m}></Col>
        <LogInForm />
      </Col>

      <Col
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1517842645767-c639042777db?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bm90ZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80")`,
          marginBottom: "-192px",
          marginTop: "0px",
          marginRight: "-15px",
        }}
      ></Col>
    </Col>
    //   </Row>
    // </Container>
  );
}
