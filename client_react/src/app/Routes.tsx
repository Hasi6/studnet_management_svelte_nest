import React from "react";
import { withRouter, Route, Switch } from "react-router-dom";

// Screens
import Login from "./screens/auth/Login/Login";

const Routes = ({ location }: { location: any }): JSX.Element => {
  return (
    <Switch key={location.key}>
      <Route path="/login" exact component={Login} />
    </Switch>
  );
};

export default withRouter(Routes);
