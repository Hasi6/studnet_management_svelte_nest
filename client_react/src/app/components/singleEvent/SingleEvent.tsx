import React from "react";

const SingleEvent = () => {
  return (
    <li>
      <div
        className="time"
        style={{
          background:
            "url('https://avatars0.githubusercontent.com/u/37216970?s=460&u=f5293b88d23b3694aa76b7149ce28480cbe2912e&v=4')"
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

export default SingleEvent;
