import React, { createElement } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const UnPrivateRoute = ({ component, auth, ...rest }: any) => (
  <Route
    {...rest}
    render={props =>
      auth ? <Redirect to="/" /> : createElement(component, props)
    }
  />
);

const mapStateToProps = (state: any) => {
  return {
    auth: state?.auth?.auth
  };
};

export default connect(mapStateToProps)(UnPrivateRoute);
