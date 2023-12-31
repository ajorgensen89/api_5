import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import logo from "../assets/logo5.jpg";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import appStyles from "../styles/App.module.css"
import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import axios from "axios";
import useToggle from "../hooks/useToggle";
import { removeTimestampToken } from "../utils/utils";


/**Icons from Font Awesome. */
/**Navlink takes 'to' prop to link to App.js Routes. */

const NavBar = () => {

  /** Use Hook to collaspe and expand burger dropdown menu on click. */
  const { collapseExpand, setCollapseExpand, burgerRef } = useToggle();

  /** Access data in a child component to display Ternary condition in 
   * navigation View. */
  const currentUser = useCurrentUser();

  const setCurrentUser = useSetCurrentUser();

  const handleLogout = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      // Set current user to null field. Noone is logged in.
      setCurrentUser(null);
      // Remove timestamp token when use logs out.

      removeTimestampToken();
      console.log("logged out /logout/")
    } catch (err) {
      console.log(err, "errlogout");
    }
  };

  /** Options for either logged in or logged out user. */
  /** {currentUser?.username} */
  const loggedInNavView = (
    <>
      <NavLink
        className={styles.NavLink}
        // activeClassName={styles.Active}

        // Link to all blurbs created on website. NEWSFEED
        to="/newsfeed"
      >
        <i className="fa-regular fa-newspaper"></i>Followed Feed
      </NavLink>
      <NavLink
        className={({ isActive }) => {
          const linkClass = [appStyles.i];
          if (isActive) linkClass.push(appStyles.active);

          // returns "NavLink" or "Navlink.active"
          return linkClass.join(" ");
        }}
        // activeClassName={styles.Active}

        // Link to blurbs or users they have voted for.
        to="/upVoted"
      >
        <i className="fa-solid fa-thumbs-up"></i>My Votes!
      </NavLink>
      <NavLink
        className={({ isActive }) => {
          const linkClass = [appStyles.i];
          if (isActive) linkClass.push(appStyles.active);

          // returns "NavLink" or "Navlink.active"
          return linkClass.join(" ");
        }}
        // activeClassName={styles.Active}

        // Link to blurbs or users they have voted for.
        to="/contacts"
      >
        <i className="fa-regular fa-message"></i>Contact Us
      </NavLink>
      <NavLink

        // Link to home when logging out.
        to="/"
        className={({ isActive }) => {
          const linkClass = [styles.NavLink];
          if (isActive) linkClass.push(styles.active);

          // returns "NavLink" or "Navlink.active"
          return linkClass.join(" ");
        }}
        onClick={handleLogout}
      // activeClassName={styles.Active}
      >
        <i className="fa-regular fa-face-smile-wink"></i>Log Out
      </NavLink>
      <NavLink

        // (?) check if currentUser and link to current logged user via profile id.
        to={`/profiles/${currentUser?.profile_id}`}
        className={styles.NavLink}

      // activeClassName={styles.Active}
      >
        <Avatar src={currentUser?.profile_image} text="Profile" height={35} />

      </NavLink>
    </>
  );

  const loggedOutNavView = (
    <>
      <NavLink
        className={({ isActive }) => {
          const linkClass = [styles.NavLink];
          if (isActive) linkClass.push(styles.active);

          // returns "NavLink" or "Navlink.active"
          return linkClass.join(" ");
        }}


        // Link to url.
        to="/login"
      >
        <i className="fa-regular fa-face-smile"></i>Log in
      </NavLink>
      <NavLink

        // Link to url.
        to="/signup"
        className={styles.NavLink}
      // activeClassName={styles.Active}
      >
        <i className="fa-regular fa-face-smile-wink"></i>Sign up
      </NavLink>

    </>
  );

  /** Creates link*/
  const createBlurbsNavView = (
    <NavLink
      exact
      className={styles.NavLink}
      // activeClassName={styles.Active}

      // Link navigation to create a blurb.
      to="/blurbs/create"
    >
      <i className="fa-solid fa-circle-plus"></i>New Blurb
    </NavLink>

  )

  return (
    // styles = folder, NavBar = module.css file inside folder.
    <Navbar expanded={collapseExpand} className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>

            {/* Fruity logo in NvaBar. Same as favicon. */}
            <img src={logo} alt="logo" height="45" />
          </Navbar.Brand>
        </NavLink>

        {/* Shows 'New Blurb' if user exsits. */}
        {currentUser && createBlurbsNavView}

        {/* Toggle and Collapse NavBar used when screen size changes on devices. 
         */}
        <Navbar.Toggle
          ref={burgerRef}
          onClick={() => setCollapseExpand(!collapseExpand)}
          aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <NavLink
              exact
              className={styles.NavLink}
              // activeClassName={styles.Active}

              // Link navigation back to home page.
              to="/"
            >
              <i className="fa-regular fa-face-laugh-beam"></i>Home
            </NavLink>

            {/* Ternary conditions to render depending on code conditions above in 
            'const' loggedInIcons and loggedOutIcons depending on context set up 
            for currentUser. */}
            {currentUser ? loggedInNavView : loggedOutNavView}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
