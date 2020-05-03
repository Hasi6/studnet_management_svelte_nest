import React, { FC, useState } from "react";
import AuthorizedWrapper from "../../components/wrappers/AuthorizedWrapper/AuthorizedWrapper";
import SingleEvent from "../../components/singleEvent/SingleEvent";
import { Grid } from "@material-ui/core";
import GooglePlacesAutocomplete, {
  getLatLng,
  geocodeByPlaceId
} from "react-google-places-autocomplete";
// If you want to use the provided css
import "react-google-places-autocomplete/dist/index.min.css";

const Home: FC = (): JSX.Element => {
  return (
    <AuthorizedWrapper>
      <h1>Home Page</h1>

      <GooglePlacesAutocomplete
        onSelect={async e => {
          console.log(e);
          const geoMetry = await geocodeByPlaceId(e.place_id);
          console.log(await getLatLng(geoMetry[0]));
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
