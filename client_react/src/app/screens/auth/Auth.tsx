import React from "react";
import Login from "./Login/Login";
import Register from "./Register/Register";

import "./Auth.scss";

const Auth = () => {
  return (
    <div className="authSection">
      <Login />
      <Register />
    </div>
  );
};

export default Auth;
