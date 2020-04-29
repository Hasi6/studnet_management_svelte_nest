import React from "react";
import { withRouter, Route, Switch } from "react-router-dom";

// Screens
import Home from "./screens/Home/Home";
import Auth from "./screens/auth/Auth";

const Routes = ({ location }: { location: any }): JSX.Element => {
  return (
    <Switch key={location.key}>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Auth} />
    </Switch>
  );
};

export default withRouter(Routes);
