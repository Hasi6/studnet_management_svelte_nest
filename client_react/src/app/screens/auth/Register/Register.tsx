import React, { FC } from "react";
import { Grid } from "@material-ui/core";
import RegisterForm from "./RegisterForm/RegisterForm";

const Register: FC = (): JSX.Element => {
  return (
    <div className="">
      <Grid container spacing={4}>
        <Grid item md={6} sm={6} xs={6} xl={6} lg={6}>
          Background Image
        </Grid>
        <Grid item md={6} sm={6} xs={6} xl={6} lg={6}>
          <RegisterForm />
        </Grid>
      </Grid>
    </div>
  );
};

export default Register;
