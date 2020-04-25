/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "../Ui";
import { GraphQLClient } from "graphql-request";
import { endPoint } from "../../../config/index";
import { loginUser } from "../../../redux/actions/auth/auth.actions";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import TextInput from "../../../components/forms/TextInput";
import { IAuthUser } from "../../../model/User.model";
import {
  composeValidators,
  combineValidators,
  isRequired,
  hasLengthGreaterThan
} from "revalidate";

const Login: any = ({
  loginUser,
  handleSubmit
}: {
  loginUser: Function;
  handleSubmit: Function;
}) => {
  const classes = useStyles();

  const client = new GraphQLClient(`${endPoint}/graphql`);

  useEffect(() => {}, []);

  const meQuery = `{
    faculties{
    name
  }
}`;

  (async () => {
    const me = await client.request(meQuery);
    console.log(me);
  })();

  const onSubmit = (e: IAuthUser) => {
    // loginUser(e);
    console.log(e);
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Field
              name="email"
              component={TextInput}
              label={"Email"}
              fullWidth={true}
              type={"text"}
            />

            <Field
              name="password"
              component={TextInput}
              label={"Password"}
              fullWidth={true}
              type={"password"}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
          </form>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          <Box mt={5}></Box>
        </div>
      </Grid>
    </Grid>
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
