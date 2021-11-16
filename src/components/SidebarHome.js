import React, { useState } from "react";
import "../styles/SideBar.css";
import { GoGrabber } from "react-icons/go";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { Redirect } from "react-router-dom";
function SideBarHome() {
  const [sideBarClicked, isSideBarClicked] = useState(true);
  const [signedOut, isSignedOut] = useState(false);
  const signOut = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/v1/register/signout")
      .then((res) => {
        isSignedOut(true);
      })
      .catch((err) => {});
  };

  return (
    <>
      <GoGrabber
        className={`${
          sideBarClicked === true ? "sidebar-icon" : "sidebar-icon-closed"
        }`}
        onClick={() => isSideBarClicked(!sideBarClicked)}
      ></GoGrabber>
      <div
        className={`${
          sideBarClicked === false
            ? "sidebar-container"
            : "sidebar-container-closed"
        }`}
      >
        <a href="#home" className="nav-links">
          <h4 className="nav-links-text">Home</h4>
        </a>

        <a href="#about" className="nav-links">
          <h4 className="nav-links-text">About</h4>
        </a>
        <a href="#contact" className="nav-links">
          <h4 className="nav-links-text">Contact</h4>
        </a>
        <NavLink exact to="/dashboard" className="nav-links">
          <h3 className="nav-links-text">Dashboard</h3>
        </NavLink>

        <NavLink className="nav-links" exact to="/signin">
          <h3 onClick={signOut} className="nav-links-text">
            Log out
          </h3>
        </NavLink>
        {signedOut && <Redirect to="/signin"></Redirect>}
      </div>
    </>
  );
}

export default SideBarHome;
