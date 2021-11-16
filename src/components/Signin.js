import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Signin.css";
import { NavLink } from "react-router-dom";
import { RiLockPasswordLine, RiMailLine } from "react-icons/ri";
import axios from "axios";
import { Redirect } from "react-router-dom";
function Signin() {
  const [signedIn, isSignedIn] = useState(false);
  const [user, setUser] = useState({ email: "", password: "" });
  const onChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const signIn = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/v1/register/signin", user)
      .then((res) => {
        isSignedIn(true);
      })
      .catch((err) => {});
  };

  return (
    <div className="main-container">
      <div className="sign-in-container">
        <Form onSubmit={signIn}>
          <Form.Group>
            <Form.Control
              onChange={onChangeHandler}
              className="sign-in-field"
              type="email"
              placeholder="Email"
              name="email"
              value={user.email}
            />
            <RiMailLine className="sign-in-field-icon"></RiMailLine>
          </Form.Group>
          <Form.Group>
            <Form.Control
              onChange={onChangeHandler}
              className="sign-in-field"
              type="password"
              placeholder="Password"
              name="password"
              value={user.password}
            />
            <RiLockPasswordLine className="sign-in-field-icon"></RiLockPasswordLine>
            <NavLink
              exact
              to="/password"
              className="forgot-password-form"
              href="#"
            >
              {" "}
              Forgot password?
            </NavLink>
          </Form.Group>

          <Button className="sign-in-submit-btn" type="submit">
            Sign in
          </Button>
          {signedIn && <Redirect to="/home"></Redirect>}

          <NavLink exact to="/signup" className="sign-up-form">
            Sign up
          </NavLink>
        </Form>
      </div>
    </div>
  );
}

export default Signin;
