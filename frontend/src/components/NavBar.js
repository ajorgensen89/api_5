import React, { useContext } from "react";
import { NavDropdown } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import logo from "../assets/logo5.jpg";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import { CurrentUserContext } from "../App";

/**Icons from Font Awesome. */
/**Navlink takes 'to' prop to link to App.js Routes. */


const NavBar = () => {
  const currentUser = useContext(CurrentUserContext);
  const loggedInIcons = <>{currentUser?.username}</>
  const loggedOutIcons = (
    <>
      <NavLink
        className={styles.NavLink}
        // activeClassName={styles.Active}
        to="/signin"
      >
        <i className="fa-regular fa-face-smile"></i>Sign in
      </NavLink>
      <NavLink
        to="/signup"
        className={styles.NavLink}
      // activeClassName={styles.Active}
      >
        <i className="fa-regular fa-face-smile-wink"></i>Sign up
      </NavLink>
    </>
  );

  return (
    // styles = folder, NavBar = module.css file inside folder.
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="45" />
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <NavLink
              exact
              className={styles.NavLink}
              // activeClassName={styles.Active}
              to="/"
            >
              <i className="fa-regular fa-face-laugh-beam"></i>Home
            </NavLink>

            {currentUser ? loggedInIcons : loggedOutIcons}

            <i className="fa-regular fa-face-grin-tongue"></i>
            <NavDropdown title="More Info" id="basic-nav-dropdown" className={styles.NavLink}
            // exact activeClassName={styles.Active}
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
