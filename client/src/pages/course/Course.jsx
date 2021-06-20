import React from "react";
import "./course.css";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Box } from "@material-ui/core";
//
// import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

//

const useStyles2 = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  root2: {
    display: "flex",
    flexWrap: "wrap",
  },

  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "35ch",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Course(props) {
  const classes2 = useStyles2();
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className=" course">
      <div className={classes2.root}>
        <div className="courseTitleContainer">
          {/* <Button
            className="courseAddButton"
            variant="contained"
            color="primary"
          >
            Create
          </Button> */}
        </div>
        <div className="courseContainer">
          <div className="courseShow">
            <span className="courseUpdateTitle">{"Course Name"}</span>
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    {"CN"}
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon
                      aria-controls="fade-menu"
                      aria-haspopup="true"
                      onClick={handleClick}
                    />
                  </IconButton>
                }
                title="Course ID"
                subheader="Coure Session Date"
              />
              <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                <MenuItem disabled>Set Course Status</MenuItem>
                <MenuItem onClick={handleClose}>Start Session</MenuItem>
                <MenuItem onClick={handleClose}>Hold Session</MenuItem>
                <MenuItem onClick={handleClose}>End Session</MenuItem>
              </Menu>

              <CardMedia
                className={classes.media}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeEimgtgUeJpAeGlMYtpzrQZ_9T2MxlGmycA&usqp=CAU"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {"Course Detailed Description"}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <Typography component="legend">{"Student Rating"}</Typography>
                <Rating name="read-only" value="4" readOnly />
              </CardActions>
            </Card>
          </div>
          {/* {Update Form Div} */}
          <div className="courseUpdate">
            <span className="courseUpdateTitle">{"Create/Update"} Course</span>
            <form
              onSubmit={""}
              className="courseUpdateForm was-validated"
              method="POST"
            >
              <div class="form-row">
                <div class={classes.root2}>
                  <TextField
                    label="Course Id"
                    id="outlined-margin-normal"
                    defaultValue="#"
                    className={classes.textField}
                    helperText="Course Id"
                    margin="normal"
                    variant="outlined"
                  />
                  <TextField
                    label="Course Name"
                    id="outlined-margin-normal"
                    defaultValue="Course Name"
                    className={classes.textField}
                    helperText="Course Name"
                    margin="normal"
                    variant="outlined"
                  />
                  <TextField
                    label="Starting Date"
                    type="date"
                    id="outlined-margin-normal"
                    defaultValue="2017-05-24"
                    className={classes.textField}
                    helperText="Starting Date"
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <TextField
                    label="Ending Date"
                    id="outlined-margin-normal"
                    type="date"
                    defaultValue="2019-05-24"
                    className={classes.textField}
                    helperText="Ending Date"
                    margin="normal"
                    variant="outlined"
                  />
                  <TextField
                    label="Image"
                    id="outlined-margin-normal"
                    type="file"
                    className={classes.textField}
                    helperText="Course Image"
                    margin="normal"
                  />
                  <TextField
                    label="Course Details"
                    id="outlined-margin-normal"
                    defaultValue="Course Details"
                    className={classes.textField}
                    helperText="Course Details"
                    margin="normal"
                    variant="outlined"
                    multiline
                  />
                  <TextField
                    label="Course Type"
                    id="outlined-margin-normal"
                    defaultValue="Course Type"
                    className={classes.textField}
                    helperText="Course Type"
                    margin="normal"
                    variant="outlined"
                  />
                </div>
                <Fab
                  className={classes.textField}
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Create
                </Fab>
                <Fab
                  className={classes.textField}
                  variant="contained"
                  color="secondary"
                  type="submit"
                >
                  Update
                </Fab>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
