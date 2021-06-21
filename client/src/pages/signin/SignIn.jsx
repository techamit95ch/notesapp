import React ,{ useState, useEffect } from "react";
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
import { SignInForm,PasswordForm } from "./form/Form";
// import { useDispatch } from "react-redux";
import {sendMail } from "../../actions/email"
import {
  useParams,
} from "react-router-dom";
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
  // const dispatch = useDispatch();
  const [otp, setOtp] = useState(null);
  const [uid, setUid] = useState(null);
  // useEffect(() => {
  //   dispatch(sendMail());
  // }, [dispatch]);
  const DoesGetMail=()=>{
    const { encryption } = useParams();

    if(!encryption){
      return <SignInForm />;
    }else{
      return <PasswordForm getUid={uid} setOtp={setOtp}/>;
    }

  }
  return (
    <Container>
      <Row className="d-flex justify-content-center">

        <Col xs={12} className={classes.header_m}></Col>
      <Col xs={12} className="d-flex justify-content-center">
          <DoesGetMail/>
      </Col>

      </Row>
    </Container>
  );
}
