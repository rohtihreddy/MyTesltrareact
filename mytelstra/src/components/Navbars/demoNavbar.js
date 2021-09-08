/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";
import logo from 'Broadband/media/logo.png'
//import {dynamicElements, getLoginStatus} from 'services/LoginService';
const dynamicElements = {
  profileTile:
      <NavLink
        href="/profile"
        target="_blank"
        >
        <i className="nc-icon nc-circle-10" />
        </NavLink>
};

function DemoNavbar(props) {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);
  //const [loginStatus, onLoginChangeStatus] = React.useState(dynamicElements);
  

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  /*React.useEffect(() => {
      const onLogin = () => {
          if(getLoginStatus()){
              onLoginChangeStatus(dynamicElements);
          }
      }
      onLogin();
  },[]);*/

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="/index"
            target="_blank"
            title="MyTelstra Home"
          ><img src={logo} className="mw-15 mh-15" alt="logo"></img>
            MyTelstra
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="/mobile"
                target="_blank"
                title="Mobile"
              >Mobile
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="/broadband"
                target="_blank"
                title="Broadband"
              >Broadband
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="/shop"
                target="_blank"
                title="Shop"
              >Shop
              </NavLink>
            </NavItem>
            <NavItem>
              {props.authenticated ? (<NavLink
                href="/cart"
                target="_blank"
              >
                <i className="nc-icon nc-cart-simple" />
              </NavLink>):(<div></div>) }
            </NavItem>
            <NavItem>
            {props.authenticated ? (<NavLink
        href="/profile"
        target="_blank"
        >
        <i className="nc-icon nc-circle-10" />
        </NavLink>):(<div></div>) }
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default DemoNavbar;
