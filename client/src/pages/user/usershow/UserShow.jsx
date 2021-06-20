import "./usershow.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Avatar,
} from "@material-ui/core";
import {
  Room,
  AlternateEmailRounded,
  PhoneRounded,
  PeopleAltOutlined,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 400,
  },
  largeAvatar: {
    width: theme.spacing(11),
    height: theme.spacing(11),
  },
}));

export default function UserShow(props) {
  const classes = useStyles();

  return (
    <div className="usershow">
      <div className="row">
        <Card className={classes.root}>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image="https://wallpaperaccess.com/full/2183146.jpg"
            title="Name"
          />
          <CardContent
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "-80px",
            }}
          >
            <div
              style={{
                justifyContent: "center",
                textAlign: "center",
                textAlignVertical: "center",
                alignItems: "center",
              }}
            >
              <Avatar
                style={{}}
                className={"largeAvatar2 " + classes.largeAvatar}
              >
                {"N"}
              </Avatar>

              <Typography style={{}} gutterBottom variant="h5" component="h3">
                {"Name"}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {"Title, jdsfjksd , skdfkjsd, 73498543, jsdhjfsh"}
              </Typography>
            </div>
          </CardContent>
          <div className="vasudha"></div>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              <Room /> {"Location, jdsfjksd , skdfkjsd, 73498543, jsdhjfsh"}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <AlternateEmailRounded /> {"Email"}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <PhoneRounded /> {"Phone"}
            </Typography>{" "}
            <Typography variant="body2" color="textSecondary" component="p">
              <PeopleAltOutlined /> {"Social Media Links"}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="h6">
              {"Current Positon"}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="h6">
              {"Last Education"}
            </Typography>
          </CardContent>{" "}
          <CardActions>"Rating"</CardActions>
        </Card>
      </div>
    </div>
  );
}
