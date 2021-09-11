import React from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";


import Phone from "@material-ui/icons/PhoneAndroid";
import RouterIcon from '@material-ui/icons/Router';
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import { Container } from "reactstrap";
//import { Star } from "@material-ui/icons";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FcLandscape, FcNightLandscape } from "react-icons/fc";
import { GiSun } from "react-icons/gi";
import {USER} from 'constants/index'

function GetGreetings(){
  var hours = new Date().getHours();
  if(hours < 12){
    return  <h1 className="presentation-subtitle">Good Morning <FcLandscape /></h1>;
  }
  else if(hours < 18){
    return <h1 className="presentation-subtitle">Good Afternoon <GiSun /></h1>;
  }
  else{
    return <h1 className="presentation-subtitle">Good Night <FcNightLandscape /></h1>;
  }
}


export default function HomeBody(){
    const classes = makeStyles();
    const [user, setState] = useState([]);
    const [Plan, setPlan] = useState([]);
    var userDetails = JSON.parse(localStorage.getItem(USER));
    useEffect(() => {
      axios
        .get("http://localhost:8088/userDetails/" + userDetails.id)
        .then(response => setState(response.data))
    }, [userDetails]);
    useEffect(() => {
      axios
        .get("http://localhost:8088/viewPlanById/")
        .then(response => setPlan(response.data))
    },[]);
    console.log(user);
    return (
        <>
          <div
            className="page-header section-dark"
            style={{
              backgroundImage:
                "url(" + require("assets/img/antoine-barres.jpg").default + ")",
            }}
          >
            <div className="filter" />
            <div className="content-center">
              <Container>
                <div className="title-brand">
                  <GetGreetings />
                  <h2 className="presentation-title">{user.username}</h2>
                  <div className="fog-low">
                    <img
                      alt="..."
                      src={require("assets/img/fog-low.png").default}
                    />
                  </div>
                  <div className="fog-low right">
                    <img
                      alt="..."
                      src={require("assets/img/fog-low.png").default}
                    />
                  </div>
                </div>
                <Grid container direction="row" justifyContent="center" alignItems="center">
                <GridItem xs={15} sm={8} md={5}>
                <Card>
                    <CardHeader color="warning" stats icon>
                    <CardIcon color="warning">
                        <Phone />
                    </CardIcon>
                    <h3 className="text-center"><small>Data Usage</small></h3>
                    <h4 className="text-center">
                       <small >{user.dataremaining+"/500"} GB</small>
                    </h4>
                    </CardHeader>
                    <CardFooter stats>
                    <div className={classes.stats}>
                        <a href="#pablo">
                        Upgrade
                        </a>
                    </div>
                    </CardFooter>
                </Card>
                </GridItem>
                <GridItem xs={15} sm={8} md={5}>
                <Card>
                    <CardHeader color="success" stats icon>
                    <CardIcon color="success">
                        <RouterIcon />
                    </CardIcon>
                    <h3 className="text-center"><small>Data Usage</small></h3>
                    <h4 className="text-center">
                       <small >{user.dataremaining+"/500"} GB</small>
                    </h4>
                    </CardHeader>
                    <CardFooter stats>
                    <div className={classes.stats}>
                        <a href="#pablo">
                        Upgrade
                        </a>
                    </div>
                    </CardFooter>
                </Card>
                </GridItem>
                </Grid>
              </Container>
            </div>
            <div
              className="moving-clouds"
              style={{
                backgroundImage:
                  "url(" + require("assets/img/clouds.png").default + ")",
              }}
            />
            
          </div>
        </>
    );
}