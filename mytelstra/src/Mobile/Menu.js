import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import { Style } from '@material-ui/icons';

export default function FadeMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
        {props.menuName}
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        keepMounted
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        onClose={handleClose}
        //MenuListProps={{ onMouseLeave: handleClose }}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>View Plans</MenuItem>
        <MenuItem onClick={handleClose}>New Connection</MenuItem>
        <MenuItem onClick={handleClose}>Current Plan</MenuItem>
        <MenuItem onClick={handleClose}>Upgrade exixting Plan</MenuItem>
        <MenuItem onClick={handleClose}>My Data Usage</MenuItem>
        <MenuItem onClick={handleClose}>Current Plan</MenuItem>
        <MenuItem onClick={handleClose}>Pay Due Bill</MenuItem>
        <MenuItem onClick={handleClose}>Payment History</MenuItem>
      </Menu>
    </div>
  );
}
