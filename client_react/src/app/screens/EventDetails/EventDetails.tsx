/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect } from "react";
import { connect } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { IEvents } from "../../model/User.model";
import { getSingleEvent } from "../../redux/actions/events/events.actions";

const useStyles = makeStyles({
  root: {
    maxWidth: "50vw"
  }
});

interface propTypes {
  event: IEvents[];
  getSingleEvent: Function;
}

const EventDetails: FC<propTypes> = ({
  event,
  getSingleEvent
}): JSX.Element => {
  const classes = useStyles();

  const { id } = useParams();
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
    <div className="container">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="300"
            image={event[0]?.image}
            title="Contemplative Reptile"
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {event[0]?.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
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
    </div>
  );
};

const mapStateToProps = (state: any, ownProps: any) => {
  const { id } = ownProps?.match?.params;
  return {
    event: state?.events?.events.filter((event: IEvents) => event._id === id)
  };
};

export default connect(mapStateToProps, { getSingleEvent })(EventDetails);
