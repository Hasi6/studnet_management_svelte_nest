/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect } from "react";
import { connect } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { IEvents } from "../../model/User.model";
import { getSingleEvent } from "../../redux/actions/events/events.actions";

interface propTypes {
  event: IEvents[];
  getSingleEvent: Function;
}

const EventDetails: FC<propTypes> = ({
  event,
  getSingleEvent
}): JSX.Element => {
  const { id } = useParams();
  const history = useHistory();

  const getEvent = () => {
    if (event.length === 0) {
      getSingleEvent({ id }, history);
    }
  };

  useEffect(() => {
    getEvent();
  }, [event]);

  return <div>{JSON.stringify(id)}</div>;
};

const mapStateToProps = (state: any, ownProps: any) => {
  const { id } = ownProps?.match?.params;
  return {
    event: state?.events?.events.filter((event: IEvents) => event._id === id)
  };
};

export default connect(mapStateToProps, { getSingleEvent })(EventDetails);
