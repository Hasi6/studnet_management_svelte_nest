import React, { FC } from "react";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import {
  combineValidators,
  isRequired,
  composeValidators,
  hasLengthGreaterThan
} from "revalidate";

import { loginUser } from "../../../redux/actions/auth/auth.actions";
import { reduxForm, Field } from "redux-form";
import { IAuthUser } from "../../../model/User.model";

import TextInput from "../../../components/forms/TextInput";
import { Button } from "@material-ui/core";

interface propTypes {
  loginUser: Function;
  handleSubmit: Function;
}

const Login: FC<propTypes> = ({ loginUser, handleSubmit }): JSX.Element => {
  const onSubmit = (e: IAuthUser) => {
    loginUser(e);
  };

  return (
    <div className="loginSection">
      <Grid container spacing={4}>
        <Grid item md={6} sm={6} xs={6} xl={6} lg={6}>
          <h1>Login Section</h1>
        </Grid>
        <Grid item md={6} sm={6} xs={6} xl={6} lg={6}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="login">
              <Field
                name="email"
                component={TextInput}
                label="Username or Email"
                type="text"
              />
              <Field
                name="password"
                component={TextInput}
                label="Password"
                type="password"
              />
              <Button type="submit">Login</Button>
            </div>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

const validate = combineValidators({
  email: isRequired({ message: "Email Required" }),
  password: composeValidators(
    isRequired({ message: "Password is Required" }),
    hasLengthGreaterThan(5)({
      message: "Password needs to be at least 6 Characters"
    })
  )()
});

export default connect(null, {
  loginUser
})(reduxForm({ form: "loginForm", validate })(Login));
