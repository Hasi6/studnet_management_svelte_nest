/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, FC, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
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

interface propTypes {
  loginUser: any;
}

const Login: FC<propTypes> = ({ loginUser }): JSX.Element => {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [focus, setFocus] = useState("email");

  const client = new GraphQLClient(`${endPoint}/graphql`);

  useEffect(() => {
    loginUser({ email: "hasi@gmail.com", password: "34343434sd" });
  }, []);

  const meQuery = `{
    faculties{
    name
  }
}`;

  (async () => {
    const me = await client.request(meQuery);
    console.log(me);
  })();

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
          <Field
            name="email"
            component={() => (
              <TextInput
                onChange={setEmail}
                value={email}
                fullWidth={true}
                label={"Email"}
                required={true}
                name={"email"}
                autoFocus={focus === "email" ? true : false}
                setFocus={setFocus}
              />
            )}
          />
          <Field
            name="password"
            component={() => (
              <TextInput
                onChange={setPassword}
                value={password}
                fullWidth={true}
                label={"Password"}
                type="password"
                required={true}
                name={"password"}
                autoFocus={focus === "password" ? true : false}
                setFocus={setFocus}
              />
            )}
          />

          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
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

export default reduxForm({
  form: "LoginForm"
})(connect(null, { loginUser })(Login));
