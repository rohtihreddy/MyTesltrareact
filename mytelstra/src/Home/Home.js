

import React from 'react'
import DemoNavbar from 'components/Navbars/demoNavbar';
import HomeBody from './HomeBody';
import {USER, UserAuthenticated} from 'constants/index';

export default function Home(props) {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  // console.log(props);
  // console.log("From Home");
  // console.log(localStorage.getItem(UserAuthenticated));
  var x = JSON.parse(localStorage.getItem(USER));
  console.log(x);
  return (
    <>
      <DemoNavbar authenticated = {props.authenticated} user = {localStorage.getItem(USER)}/>
      <HomeBody />
      <div className="main">
      </div>
    </>
  );
}

/*
import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <div className="container">
                    <div className="graf-bg-container">
                        <div className="graf-layout">
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                        </div>
                    </div>
                    <h1 className="home-title">Spring Boot React OAuth2 Social Login Demo</h1>
                </div>
            </div>
        )
    }
}

export default Home;*/