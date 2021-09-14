import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import { Style } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import {USER} from 'constants/index';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function FadeMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  var userDetails = JSON.parse(localStorage.getItem(USER));
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
  const [user, setUser] = useState({});
 

  const getUsers = async () => {
    var userDetails = JSON.parse(localStorage.getItem(USER));
    await axios.get("http://localhost:8088/userDetails/"+ userDetails.id)
    .then(response=> setUser(response.data))
     
    };
    useEffect(() => {
     getUsers();
    }, []);
  const handlenewConnection = () => {

    if(!user.activePlanStatus){
      history.push({
      pathname: '/Broadband/newConnection'
    });
    }
    else{
      Alert.error("Already have a new connection");
    }
  }

  const handleUpgrade = () => {

    if(!user.upgradePlanStatus){
      history.push({
      pathname: '/Broadband/upgradeplan'
    });
    }
    else{
      Alert.error("Already Upgraded");
    }
  }

  const handleBill = () => {

    if(!user.activePlanStatus){
      Alert.error("No Active plan to show bill details");
    }
    else if(!user.upgradePlanStatus){
      history.push({
      pathname: '/Broadband/billdetails'
    });
    }
    else{
      Alert.error("Plan already Upgraded");
    }
  }

  const handleCurrentPlan = () => {

    if(user.activePlanStatus){
      history.push({
      pathname: '/Broadband/currentplan'
    });
    }
    else{
      Alert.error("No Active Plan");
    }
  }


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
        getContentAnchorEl={null}
        keepMounted
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem href="/Broadband" component="a" onClick={handleClose}>View Plans</MenuItem>
        <MenuItem onClick={handleCurrentPlan}>Current Plan</MenuItem>
        {/* <MenuItem onClick={handleClose}><Link to = {{pathname: '/Broadband/newConnection', authenticated: props.authenticated, user: props.user}}>New Connection</Link></MenuItem> */}
        {/* <MenuItem onClick={handleClose} href='/Broadband/newConnection' component="a">New Connection</MenuItem> */}
        <MenuItem onClick={handlenewConnection}>New Connection</MenuItem>
        <MenuItem onClick={handleUpgrade}>Upgrade existing Plan</MenuItem>
        <MenuItem onClick={handleBill}>Pay Due Bill</MenuItem>
        <MenuItem href="/Broadband/rechargehistory" component="a" onClick={handleClose}>Payment History</MenuItem>
      </Menu>
    </div>
  );
}
