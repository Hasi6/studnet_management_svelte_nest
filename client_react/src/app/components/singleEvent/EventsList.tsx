import React from "react";

import "./EventsList.scss";

const EventsList = () => {
  return (
    <section>
      <div className="leftBox">
        <div className="content">
          <h1>All Events And Shows</h1>
          <p>
            This shows you all to Upcoming Events in Any University is Sri
            Lanka. If You wish to participate you can join the events. If that
            events change we will inform you from an email of when you register
            please provide a valid email Address
          </p>
        </div>
        <div className="events">
          <ul>
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
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old.
                </p>
                <a href="https://codepen.io/collection/XdWJOQ/">View Details</a>
              </div>
              <div style={{ clear: "both" }}></div>
            </li>
            <li>
              <div className="time">
                <h2>
                  24
                  <br />
                  <span>June</span>
                </h2>
              </div>
              <div className="details">
                <h3>Where does it come from</h3>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old.
                </p>
                <a href="https://codepen.io/collection/XdWJOQ/">View Details</a>
              </div>
              <div style={{ clear: "both" }}></div>
            </li>
            <li>
              <div className="time">
                <h2>
                  24
                  <br />
                  <span>June</span>
                </h2>
              </div>
              <div className="details">
                <h3>Where does it come from</h3>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old.
                </p>
                <a href="https://codepen.io/collection/XdWJOQ/">View Details</a>
              </div>
              <div style={{ clear: "both" }}></div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EventsList;
