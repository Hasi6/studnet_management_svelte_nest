import React from "react";
import { withRouter, Route, Switch } from "react-router-dom";

// Screens
import Home from "./screens/Home/Home";
import Auth from "./screens/auth/Auth";
import PrivateRoute from "./Routes/PrivateRoute";
import UnPrivateRoute from "./Routes/UnPrivateRoute";

const Routes = ({ location }: { location: any }): JSX.Element => {
  return (
    <Switch key={location.key}>
      <PrivateRoute path="/" exact component={Home} />
      <UnPrivateRoute path="/login" exact component={Auth} />
    </Switch>
  );
};

export default withRouter(Routes);
