import React, { createElement } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component, auth, ...rest }: any) => (
  <Route
    {...rest}
    render={props =>
      !auth ? <Redirect to="/login" /> : createElement(component, props)
    }
  />
);

const mapStateToProps = (state: any) => {
  return {
    auth: state?.auth?.auth
  };
};

export default connect(mapStateToProps)(PrivateRoute);
