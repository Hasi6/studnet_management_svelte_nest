import React from "react";
import { withRouter, Switch, Route } from "react-router-dom";

// Screens
import Home from "./screens/Home/Home";
import Auth from "./screens/auth/Auth";
import PrivateRoute from "./Routes/PrivateRoute";
import UnPrivateRoute from "./Routes/UnPrivateRoute";
import CreateEvents from "./screens/CreateEvents/CreateEvents";
import EventDetails from "./screens/EventDetails/EventDetails";
import NotFound from "./screens/NotFound/NotFound";

const Routes = ({ location }: { location: any }): JSX.Element => {
  return (
    <Switch key={location.key}>
      <PrivateRoute path="/" exact component={Home} />
      <PrivateRoute path="/createEvents" exact component={CreateEvents} />
      <UnPrivateRoute path="/login" exact component={Auth} />
      <Route path="/event/:id" exact component={EventDetails} />
      <Route path="*" exact component={NotFound} />
    </Switch>
  );
};

export default withRouter(Routes);
