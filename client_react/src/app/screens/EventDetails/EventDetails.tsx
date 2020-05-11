import React, { FC } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

interface propTypes {}

const EventDetails: FC<propTypes> = (): JSX.Element => {
  const { id } = useParams();

  return <div>{JSON.stringify(id)}</div>;
};

export default connect(null)(EventDetails);
