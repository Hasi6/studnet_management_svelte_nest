import React, { FC } from "react";
import { connect } from "react-redux";
import { IEvents } from "../../model/User.model";

interface propTypes {
  event: string;
  myEvt: IEvents;
}

const SingleEvent: FC<propTypes> = ({ event, myEvt }): JSX.Element => {
  return (
    <li>
      <div
        className="time"
        style={{
          background: `url(${myEvt?.image})`
        }}
      >
        <h2 style={{ color: "black" }}>
          {myEvt?.dateTime}
          <br />
          <span>June</span>
        </h2>
      </div>
      <div className="details">
        <h3>{myEvt?.title}</h3>
        <p>{myEvt?.description}</p>
        <a href="https://codepen.io/collection/XdWJOQ/">View Details</a>
      </div>
      <div style={{ clear: "both" }}></div>
    </li>
  );
};

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    myEvt: state?.events?.events.filter(
      (eve: IEvents) => eve._id === ownProps.event
    )[0]
  };
};

export default connect(mapStateToProps)(SingleEvent);
