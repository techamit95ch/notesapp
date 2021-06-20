import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./Toppbar.css";
import {
  Avatar,
  Menu,
  MenuItem,
  Fade,
  AppBar,
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
  Dialog,
  Button
} from "@material-ui/core";
import {
  NotificationsNone,
  Language,
  Settings,
  SpeakerNotesOutlined,
  QuestionAnswer,
  MoreVert,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  logoIcon: {
    width: theme.spacing(6),
    height: theme.spacing(5),
    margin: theme.spacing(4),
    // fontSize: 30,
  },
  iconBag: {
    "& > svg": {
      margin: theme.spacing(2),
      fontSize: 25,
    },
  },
  basic: {
    "& > svg": {
      margin: theme.spacing(3),
    },
  },
}));
export default function TopBar() {
  const [open1, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose2 = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open1) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open1]);

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={"topbar"}>
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">
            <Link className="logo" to="/">
              <SpeakerNotesOutlined className={classes.logoIcon} />
            </Link>
          </span>
          <span onClick={handleClickOpen("paper")} className="logo">
            Why notes app?
          </span>
        </div>
        <div className={classes.basic + " topRight"}>
          <div className={"topbarIconContainer "}>
            <NotificationsNone fontSize="large" />
            <span className="topbarIconBag">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language fontSize="large" />
            <span className="topbarIconBag">2</span>
          </div>
          <div className={"topbarIconContainer "}>
            <QuestionAnswer fontSize="large" />
            <span className="topbarIconBag">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings fontSize="large" />
          </div>
          <div className="topbarIconContainer">
            <Avatar
              src="https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg"
              className="topAvatar"
              alt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWAJ0Ge_MNL1cOKBqqX_2CwLWNjY_vAYgHjQ&usqp=CAU"
              aria-controls="account-menu"
              aria-haspopup="true"
              onClick={handleClick}
            />
            <Menu
              id="account-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
            <Link to="/jx41XYm2">   <MenuItem onClick={handleClose}>My account</MenuItem></Link>
            <Link to="/signin">  <MenuItem onClick={handleClose}>Logout</MenuItem></Link>
            </Menu>
          </div>
        </div>
        <Dialog
          open={open1}
          onClose={handleClose2}
          scroll={scroll}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
          <DialogTitle id="scroll-dialog-title">Notes App Description</DialogTitle>
          <DialogContent dividers={scroll === "paper"}>
            <DialogContentText
              id="scroll-dialog-description"
              ref={descriptionElementRef}
              tabIndex={-1}
            >
              {[...new Array(50)]
                .map(
                  () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                )
                .join("\n")}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose2} color="primary">
              Cancel
            </Button>

          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}
