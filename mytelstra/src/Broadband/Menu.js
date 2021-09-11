import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import { Style } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";


export default function FadeMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  let history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    // history.push({
    //   pathname: '/Broadband/newConnection',
    //   authenticated: props.authenticated,
    //   user: props.user
    // });
  };

  // console.log(props.authenticated + "Menu");
  // console.log(props.user + "Menu");

  return (
    <div>
      <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
        {props.menuName}
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>View Plans</MenuItem>
        <MenuItem onClick={handleClose}>Current Plan</MenuItem>
        <MenuItem onClick={handleClose}><Link to = {{pathname: '/Broadband/newConnection', authenticated: props.authenticated, user: props.user}}>New Connection</Link></MenuItem>
        <MenuItem onClick={handleClose}>Upgrade existing Plan</MenuItem>
        <MenuItem onClick={handleClose}>Pay Due Bill</MenuItem>
        <MenuItem onClick={handleClose}>Payment History</MenuItem>
      </Menu>
    </div>
  );
}
