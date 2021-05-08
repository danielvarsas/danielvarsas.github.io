import { React, useState, useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import logo from "../elements/logofeher.png";

// import Map from "./Map";
// import App from "../App";

function Menu() {
  const [navbar, setNavbar] = useState(false);
  // const [smallmenu, setSmallmenu] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 20) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div>
      <div className="col-md-12">
        <Router>
          <Navbar
            className={navbar ? "navbar active" : "navbar"}
            variant="light"
            expand="lg"
            fixed="top"
          >
            <Navbar.Brand className="navbar-brand" href="/">
              <img
                src={logo}
                width="50"
                height="50"
                className="d-inline-block align-top"
                alt=""
              />
              Komposzt Hoszt Szeged
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav navbar-light">
              <Nav className="justify-content-end" style={{ width: "100%" }}>
                <Nav.Link className="nav-links" href="/#igykomposztalj">
                  Rólunk
                </Nav.Link>
                <Nav.Link className="nav-links" href="/terkep">
                  Keresés
                </Nav.Link>
                <Nav.Link className="nav-links" href="/regisztracio">
                  Regisztrálok
                </Nav.Link>
                <Nav.Link className="nav-links" href="/#gyik">
                  Gy.I.K.
                </Nav.Link>
                <Nav.Link className="nav-links" href="/#contact">
                  Kapcsolat
                </Nav.Link>
                {/* <p>{smallmenu}</p> */}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Router>
        <br />
      </div>
    </div>
  );
}

export default Menu;
