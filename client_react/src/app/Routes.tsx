import React from "react";
import { withRouter, Switch } from "react-router-dom";

// Screens
import Home from "./screens/Home/Home";
import Auth from "./screens/auth/Auth";
import PrivateRoute from "./Routes/PrivateRoute";
import UnPrivateRoute from "./Routes/UnPrivateRoute";
import CreateEvents from "./screens/CreateEvents/CreateEvents";

const Routes = ({ location }: { location: any }): JSX.Element => {
  return (
    <Switch key={location.key}>
      <PrivateRoute path="/" exact component={Home} />
      <PrivateRoute path="/createEvents" exact component={CreateEvents} />
      <UnPrivateRoute path="/login" exact component={Auth} />
    </Switch>
  );
};

export default withRouter(Routes);
