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

export default function UserShow({ profile }) {
  const classes = useStyles();

  return (
    <div className="usershow">
      <div className="row">
        <Card className={classes.root}>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={"https://wallpaperaccess.com/full/2183146.jpg"}
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
                src={profile.profileImage ? profile.profileImage : ""}
                className={"largeAvatar2 " + classes.largeAvatar}
              >
                {/* {"N"} */}
                {profile.name ? profile.name[0] : "N"}
              </Avatar>

              <Typography style={{}} gutterBottom variant="h5" component="h3">
                {profile.name ? profile.name : "Name"}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {profile.title ? profile.title : "Title"}
              </Typography>
            </div>
          </CardContent>
          <div className="vasudha"></div>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              <Room /> {profile.city ? profile.city : "city"},
              {profile.pin ? profile.pin : "pin"}
            </Typography>
            {/* <Typography variant="body2" color="textSecondary" component="p">
              <AlternateEmailRounded />{" "}
              {profile.email ? profile.email : "email"}
            </Typography> */}
            <Typography variant="body2" color="textSecondary" component="p">
              <PhoneRounded />
              {profile.phoneNumber ? profile.phoneNumber : "phoneNumber"}
            </Typography>{" "}
            <Typography variant="body2" color="textSecondary" component="p">
              <PeopleAltOutlined /> {profile.github ? profile.github : "Git"}
              <PeopleAltOutlined />{" "}
              {profile.linkedIn ? profile.linkedIn : "LinkedIn"}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="h6">
              {profile.curr_pos ? profile.curr_pos : "Current Position"}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="h6">
              {profile.last_edu ? profile.last_edu : "Last Education"}
            </Typography>
          </CardContent>{" "}
          {/* <CardActions>"Rating"</CardActions> */}
        </Card>
      </div>
    </div>
  );
}
