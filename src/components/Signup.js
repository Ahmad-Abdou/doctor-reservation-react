import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Signup.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { Redirect } from "react-router-dom";
function Signup() {
  const [signedUp, isSignedUp] = useState(false);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    password: "",
    phone: "",
    email: "",
    personalNumber: "",
  });

  const onChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const registerHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/v1/register", user)
      .then((res) => {
        isSignedUp(true);
      })
      .catch((err) => {});
  };

  return (
    <div className="main-container">
      <div className="sign-in-container">
        <Form onSubmit={registerHandler}>
          <Form.Group>
            <Form.Control
              onChange={onChangeHandler}
              className="sign-up-field"
              type="text"
              placeholder="First name"
              name="firstName"
              value={user.firstName}
            />
            <Form.Control
              className="sign-up-field"
              type="text"
              placeholder="Last name"
              onChange={onChangeHandler}
              name="lastName"
              value={user.lastName}
            />
            <Form.Control
              className="sign-up-field"
              type="email"
              placeholder="Email"
              name="email"
              onChange={onChangeHandler}
              value={user.email}
            />
            <Form.Control
              className="sign-up-field"
              type="password"
              placeholder="Password"
              name="password"
              onChange={onChangeHandler}
              value={user.password}
            />
            <Form.Control
              className="sign-up-field"
              type="text"
              placeholder="Phone"
              name="phone"
              onChange={onChangeHandler}
              value={user.phone}
            />
            <Form.Control
              className="sign-up-field"
              type="text"
              placeholder="Personal Number"
              name="personalNumber"
              onChange={onChangeHandler}
              value={user.personalNumber}
            />
          </Form.Group>
          {/* 
          <NavLink to="/signin"> */}{" "}
          <Button className="sign-up-submit-btn" type="submit">
            Sign up{" "}
          </Button>
          {/* </NavLink> */}
          <NavLink exact to="signin" className="sign-in-form">
            already have an account!
          </NavLink>
        </Form>
        {signedUp && <Redirect to="/signin"></Redirect>}
      </div>
    </div>
  );
}

export default Signup;
