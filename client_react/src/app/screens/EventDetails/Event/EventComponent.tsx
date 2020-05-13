/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import {
  CardMedia,
  CardContent,
  CardActions,
  Card,
  CardActionArea,
  Button,
  Typography
} from "@material-ui/core";

import { getSingleEvent } from "../../../redux/actions/events/events.actions";

import { makeStyles } from "@material-ui/core/styles";
import { IEvents } from "../../../model/User.model";

const useStyles = makeStyles({
  root: {
    maxWidth: 600
  }
});

interface propTypes {
  event: IEvents[];
  getSingleEvent: Function;
  id: string;
}

const EventComponent: FC<propTypes> = ({
  event,
  getSingleEvent,
  id
}): JSX.Element => {
  const classes = useStyles();

  const history = useHistory();

  const getEvent = () => {
    if (event.length === 0) {
      getSingleEvent({ id }, history);
    }
  };

  useEffect(() => {
    getEvent();
  }, []);

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
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      )}
    </div>
  );
};

const mapStateToProps = (state: any, ownProps: any) => {
  const { id } = ownProps;
  return {
    event: state?.events?.events.filter((event: IEvents) => event._id === id)
  };
};

export default connect(mapStateToProps, { getSingleEvent })(EventComponent);
