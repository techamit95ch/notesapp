import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Button, Fab, Card, Hidden } from "@material-ui/core";
import { GetAppRounded, Close } from "@material-ui/icons";
import {
  Col,
  Row,
  Container,
  Form,
  FormCheck,
  FloatingLabel,
} from "react-bootstrap";
import clsx from "clsx";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import FormHelperText from "@material-ui/core/FormHelperText";
import IconButton from "@material-ui/core/IconButton";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import Checkbox from "@material-ui/core/Checkbox";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { UserAgent } from "react-useragent";
import { useSelector, useDispatch } from "react-redux";
import sha256 from "crypto-js/sha256";
import { loginAuth } from "../../../actions/authInfo";

var CryptoJS = require("crypto-js");
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    width: "50ch",
  },
  header_m: {
    marginTop: theme.spacing(14),
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
}));

export function LogInForm() {
  const dispatch = useDispatch();

  const classes = useStyles();
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [email, setEmail] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // const dispatch=useDispatch();
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (re.test(email)) {
      const data = { email: email, password: values.password, fromReact: true };
      dispatch(loginAuth(data));
    }
  };
  return (
    <Col sm={5}>
      <Form action="#" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <p>Please fill in this form to Login.</p>
        <hr />
        <FormControl className={clsx(classes.margin, classes.textField)}>
          <InputLabel htmlFor="signin_email">Email</InputLabel>
          <Input
            id="signin_email"
            type="email"
            onChange={(event) => setEmail(event.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <EmailRoundedIcon color="primary" />
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl className={clsx(classes.margin, classes.textField)}>
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? (
                    <Visibility color="primary" />
                  ) : (
                    <VisibilityOff color="primary" />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <Col class="clearfix">
          <Fab
            type="submit"
            variant="extended"
            color="primary"
            aria-label="add"
            className="registerbtn"
          >
            Login
          </Fab>
          <Button
            variant="extended"
            color="primary"
            aria-label="add"
            className="registerbtn"
          >
            <Link to="/auth/signin">Sign In</Link>
          </Button>
          <Col class="container signin"></Col>
        </Col>
      </Form>
    </Col>
  );
}
