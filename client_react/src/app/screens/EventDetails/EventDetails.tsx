/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC } from "react";
import { connect } from "react-redux";
import EventComponent from "./Event/EventComponent";
import { useParams } from "react-router-dom";
import { Grid } from "@material-ui/core";

interface propTypes {}

const EventDetails: FC<propTypes> = (): JSX.Element => {
  const { id } = useParams();
  return (
    <div className="container">
      <Grid container spacing={6}>
        <Grid item md={8}>
          <EventComponent id={id} />
        </Grid>
        <Grid item md={4}>
          <EventComponent id={id} />
        </Grid>
      </Grid>
    </div>
  );
};

export default connect(null)(EventDetails);
