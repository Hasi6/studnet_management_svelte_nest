/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { connect } from "react-redux";

import {
  CardMedia,
  CardContent,
  CardActions,
  Card,
  CardActionArea,
  Button,
  Typography,
  Grid
} from "@material-ui/core";

import {
  getSingleEvent,
  addParticipants
} from "../../../redux/actions/events/events.actions";

import { makeStyles } from "@material-ui/core/styles";
import { IEvents } from "../../../model/User.model";
import { removeParticipants } from "../../../redux/actions/events/events.actions";
import MapComponent from "../../../components/map/MapComponent";

const useStyles = makeStyles({
  root: {
    maxWidth: 600
  }
});

interface propTypes {
  event: IEvents[];
  getSingleEvent: Function;
  id: string;
  participantIds: string[];
  userId: string | undefined;
  addParticipants: Function;
  removeParticipants: Function;
}

const EventComponent: FC<propTypes> = ({
  event,
  getSingleEvent,
  id,
  participantIds,
  userId,
  addParticipants,
  removeParticipants
}): JSX.Element => {
  const classes = useStyles();

  const history = useHistory();

  const [map, setMap] = useState(false);

  const getEvent = () => {
    if (event.length === 0) {
      getSingleEvent({ id }, history);
    }
  };

  useEffect(() => {
    getEvent();
  }, []);

  const meJoined = () => {
    return participantIds?.some((id: string) => id === userId);
  };

  const joinOrLeave = () => {
    if (meJoined()) {
      removeParticipants({ id: event[0]?._id });
    } else {
      addParticipants({ id: event[0]?._id });
    }
  };

  return (
    <div>
      {event.length > 0 && (
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              image={event[0]?.image}
              title="Contemplative Reptile"
            />

            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                style={{ float: "left" }}
              >
                {event[0]?.title}
              </Typography>
              <br />
              <br />

              <Typography
                variant="h6"
                color="textSecondary"
                component="h4"
                style={{ float: "left" }}
              >
                {event[0]?.dateTime}
              </Typography>
              <br />
              <br />
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                style={{ float: "left" }}
              >
                {event[0]?.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Grid container spacing={8}>
              <Grid item lg={8} xl={8} sm={8} xs={8}>
                {userId && (
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => joinOrLeave()}
                  >
                    {meJoined() ? "Leave Event" : "Join Event"}
                  </Button>
                )}
                <Button
                  size="small"
                  color="primary"
                  onClick={() => setMap(!map)}
                >
                  {map ? "Hide Location" : "See Location"}
                </Button>
              </Grid>
              <Grid item>
                {userId === event[0]?.user?._id && (
                  <Button
                    style={{ background: "green" }}
                    size="small"
                    color="primary"
                    variant="contained"
                    onClick={() => setMap(!map)}
                  >
                    <Link to={`/editEvent/${event[0]?._id}`}>Edit Event</Link>
                  </Button>
                )}
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      )}
      <br />
      {event.length > 0 && map && (
        <MapComponent
          lat={parseFloat(event[0]?.location?.lat)}
          lng={parseFloat(event[0]?.location?.lng)}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state: any, ownProps: any) => {
  const { id } = ownProps;
  let participantIds = [];
  const event = state?.events?.events.filter(
    (event: IEvents) => event._id === id
  );

  if (event.length > 0) {
    participantIds = event[0]?.participants?.map((user: any) => user._id);
  }

  return {
    event: state?.events?.events.filter((event: IEvents) => event._id === id),
    participantIds,
    userId: state?.auth?.user?._id
  };
};

export default connect(mapStateToProps, {
  getSingleEvent,
  addParticipants,
  removeParticipants
})(EventComponent);
