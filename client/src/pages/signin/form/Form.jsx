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
import { useHistory } from 'react-router-dom';
import validator from 'validator'
import { createEmail } from "../../../actions/email";

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
export function SignInForm({ getUid, setOtp }) {
  const classes = useStyles();
  const [uid, setUid] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = useState("");

  const [emailError, setEmailError] = useState('')
  const handleClickOpen = (event) => {
    event.preventDefault();
    let txt = "";
    txt += navigator.appCodeName;
    txt += navigator.appName;
    txt += navigator.appVersion;
    txt += navigator.cookieEnabled;
    txt += navigator.language;
    txt = sha256(txt);
    txt += navigator.onLine;
    txt += navigator.platform;
    txt += navigator.userAgent;
    // console.log(txt);
    txt = sha256(txt);

    const data = { agent: txt, email: email };
    // Encrypt
    var ciphertext = CryptoJS.AES.encrypt(
      JSON.stringify(data),
      "my-secret-key@123"
    ).toString();
      // console.log(data);
     const data1 = {
       email: email,
       useragent: ciphertext,
       fromReact:true,
     };
    createEmail(data1);
    // setUid(getUid);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(true);
  };
  const [pinData, setPinData]= useState("");

  const history = useHistory();
  return (
    <Col sm={5}>
      <Form action="#" onSubmit={handleClickOpen}>
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>

        <hr />
        <FormControl className={clsx(classes.margin, classes.textField)}>
          <InputLabel htmlFor="signin_email">Email</InputLabel>
          <Input
            onChange=""
            id="signin_email"
            type="email"
            endAdornment={
              <InputAdornment position="end">
                <Button type="submit" color="primary" onClick={handleClickOpen}>
                  <EmailRoundedIcon /> Verify
                </Button>
              </InputAdornment>
            }
            onChange={event => setEmail(event.target.value)}
          />
        </FormControl>
      </Form>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">Verify Key</DialogTitle>
        <DialogContent>
          <p>Check Mail</p>
          <Form noValidate>
            <FormControl>
              <TextField name="verNum" onChange={event => setPinData(event.target.value)} />
            </FormControl>
          </Form>
        </DialogContent>
        <DialogActions>
          <Button type="submit" onClick={()=>{
              const path ="/auth/signin/"+pinData;
              history.push(path);
            }} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Col>
  );
}
export function PasswordForm({ getUid, setOtp }) {
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
const uid = React.useState(getUid);
  return (
    <Col sm={5}>
      <Form action="">
        <h1>Add Password</h1>
        <p>Please fill in this form to continue.</p>
        <hr />
        <FormControl className={clsx(classes.margin, classes.textField)}>
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>

          <Input
            id="standard-adornment-password"
            name="password"
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
        <p>
          By creating an account you agree to our{" "}
          <Link href="#">Terms & Privacy</Link>.
        </p>

        <Col class="clearfix">
          <Fab
            type="submit"
            variant="extended"
            color="primary"
            aria-label="add"
            className="registerbtn"
          >
            Sign In
          </Fab>
          <Col class="container signin"></Col>
        </Col>
      </Form>
    </Col>
  );
}
