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
          background: `url(${myEvt.image})`
        }}
      >
        <h2>
          24
          <br />
          <span>June</span>
        </h2>
      </div>
      <div className="details">
        <h3>Where does it come from</h3>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </p>
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
    )
  };
};

export default connect(mapStateToProps)(SingleEvent);
