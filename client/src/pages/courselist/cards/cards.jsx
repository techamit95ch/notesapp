import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core/";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// import { likePost, deletePost } from "../../../actions/posts";
import useStyles from "./style";

const Cards = ({ course }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={
          course.courseImg ||
          "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
        }
        title={course.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{course.courseName}</Typography>
        <Typography variant="body2">
          {moment(course.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: "white" }} size="small">
          <Link to={"/course/"+course._id}>
            <MoreHorizIcon fontSize="default" />
          </Link>
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">
          {course.courseDetails}
        </Typography>
      </div>
      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
        component="h2"
      >
        {course.courseId}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {course.startDate}
          {course.endDate}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary"></Button>
        <Button size="small" color="primary"></Button>
      </CardActions>
    </Card>
  );
};

export default Cards;
