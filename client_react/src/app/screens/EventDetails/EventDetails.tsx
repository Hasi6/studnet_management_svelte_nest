import React, { FC, useEffect } from "react";
import { connect } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { IEvents } from "../../model/User.model";

interface propTypes {
  event: IEvents[];
}

const EventDetails: FC<propTypes> = ({ event }): JSX.Element => {
  const { id } = useParams();
  const history = useHistory();
  console.log(event);

  if (event.length === 0) {
    history.push("/");
  }

  return <div>{JSON.stringify(id)}</div>;
};

const mapStateToProps = (state: any, ownProps: any) => {
  const { id } = ownProps?.match?.params;
  return {
    event: state?.events?.events.filter((event: IEvents) => event._id === id)
  };
};

export default connect(mapStateToProps)(EventDetails);
