import React, { FC } from "react";
import { Grid } from "@material-ui/core";

import "./Login.scss";

const Login: FC = (): JSX.Element => {
  return (
    <div className="loginSection">
      <Grid container spacing={4}>
        <Grid item md={6} sm={6} xs={6} xl={6} lg={6}>
          <h1>Login Section</h1>
        </Grid>
        <Grid item md={6} sm={6} xs={6} xl={6} lg={6}>
          <h1>Login Section</h1>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
