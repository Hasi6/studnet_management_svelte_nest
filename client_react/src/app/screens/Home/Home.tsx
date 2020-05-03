import React, { FC } from "react";
import AuthorizedWrapper from "../../components/wrappers/AuthorizedWrapper/AuthorizedWrapper";
import SingleEvent from "../../components/singleEvent/SingleEvent";
import { Grid } from "@material-ui/core";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { GoogleComponent } from "../../../../../../../Svelte/Student_Management_Syetem/client_react/node_modules/react-google-location";
// If you want to use the provided css
import "react-google-places-autocomplete/dist/index.min.css";

import "./Home.scss";

const Home: FC = (): JSX.Element => {
  return (
    <AuthorizedWrapper>
      <h1>Home Page</h1>

      <GoogleComponent
        apiKey={"AIzaSyDfc3fsuRVv0wrp3FfPqrtdbtsY5YQQl2k"}
        language={"en"}
        coordinates={true}
        locationBoxStyle={"custom-style"}
        locationListStyle={"custom-style-list"}
        onChange={(e: any) => {
          console.log(e);
        }}
      />

      {/*<Grid container spacing={3}>
        <Grid item md={4} sm={6} xs={8} lg={4} xl={4}>
          <SingleEvent />
        </Grid>
        <Grid item md={4} sm={6} xs={8} lg={4} xl={4}>
          <SingleEvent />
        </Grid>
        <Grid item md={4} sm={6} xs={8} lg={4} xl={4}>
          <SingleEvent />
        </Grid>
        <Grid item md={4} sm={6} xs={8} lg={4} xl={4}>
          <SingleEvent />
        </Grid>
        <Grid item md={4} sm={6} xs={8} lg={4} xl={4}>
          <SingleEvent />
        </Grid>
      </Grid> */}
    </AuthorizedWrapper>
  );
};

export default Home;
