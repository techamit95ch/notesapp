import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Button,
  Fab,
  Card,
  Hidden,
  ButtonBase,
  Typography,
} from "@material-ui/core";
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
import sha1 from "crypto-js/sha1";
import { useHistory } from "react-router-dom";
import validator from "validator";
import { createEmail, matchUID } from "../../../actions/email";
import { createAuth } from "../../../actions/authInfo";
import CircularProgress from "@material-ui/core/CircularProgress";
// import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
const image = {
  url: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fdigitallearning.eletsonline.com%2Fwp-content%2Fuploads%2F2018%2F04%2FSchool-Education-Transformation-Paving-Way-for-Better-Higher-Education.jpg&f=1&nofb=1",
  title: "Verify",
  width: "100%",
};
const CryptoJS = require("crypto-js");
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%",
  },
  image: {
    position: "relative",
    height: 400,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100,
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15,
      },
      "& $imageMarked": {
        opacity: 0,
      },
      "& $imageTitle": {
        border: "4px solid currentColor",
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 100%",
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
    }px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}));

export function SignInForm({ getUid, setOtp }) {
  const classes = useStyles();
  
  const handleClickOpen = (event) => {
    event.preventDefault();

    let txt = "";
    txt += navigator.appCodeName;
    txt += navigator.appName;
    txt += navigator.appVersion;
    txt += navigator.cookieEnabled;
    txt += navigator.language;
    txt += navigator.onLine;
    txt += navigator.platform;
    txt += navigator.userAgent;
    const data1 = {
      userAgent: txt,
      fromReact: true,
    };  
      createEmail(data1);
  };

  const history = useHistory();
  return (
    <ButtonBase
      focusRipple
      key={image.title}
      className={classes.image}
      focusVisibleClassName={classes.focusVisible}
      style={{
        width: image.width,
      }}
    >
      <Form action="#" method="post" onSubmit={handleClickOpen}>
        <span
          className={classes.imageSrc}
          style={{
            backgroundImage: `url(${image.url})`,
          }}
        />
        <span className={classes.imageBackdrop} />
        <span className={classes.imageButton}>
          <Button
            component="span"
            variant="subtitle1"
            color="inherit"
            className={classes.imageTitle}
            type="submit"
          >
            {image.title}
            <span className={classes.imageMarked} />
          </Button>
        </span>
      </Form>
    </ButtonBase>
  );
}
export function PasswordForm({ param }) {
  const dispatch = useDispatch();

  const [idx, setIdx] = React.useState(param);
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    // dispatch(matchUID(idx));
    // setCount(count + 1);
    // if (count === 0)
    dispatch(matchUID(idx));
  }, [count]);
  const result = useSelector((state) => state.email);

  const classes = useStyles();
  const re =
    /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+=-\?;,./{}|\":<>\[\]\\\' ~_]).{8,}/;
  const [color, setcolor] = useState("black");

  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });
  const isOk = (password) => {
    if (re.test(password)) setcolor("green");
    else if (password.length < 4) setcolor("black");
    else setcolor("red");
  };
  const handleChange = (prop) => (event) => {
    isOk(values.password);
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    isOk(values.password);
    setValues({ ...values, showPassword: !values.showPassword });
  };
  // console.log("---------------------------", result.result);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
    isOk(values.password);
  };
  // const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (color == "green") {
      let txt = "";
      txt += navigator.appCodeName;
      txt += navigator.appName;
      txt += navigator.appVersion;
      txt += navigator.cookieEnabled;
      txt += navigator.language;
      txt += navigator.onLine;
      txt += navigator.platform;
      txt += navigator.userAgent;
      const data = {
        userAgent: "",
        uid: idx,
        fromReact: true,
        password: values.password,
      };
      dispatch(createAuth(data));
    }
  };

  if (result.result == false) return <CircularProgress disableShrink />;
  // const uid = React.useState(getUid);
  return (
    <Col sm={5}>
      <Form action="" onSubmit={handleSubmit}>
        <h1>Add Password</h1>
        <p style={{ color: color }}>
          Password must be atleast 8 character long , alphanumeric with caps and
          small and must have special Character character.
        </p>
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
