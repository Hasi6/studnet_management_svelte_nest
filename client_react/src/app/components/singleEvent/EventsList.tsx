import React from "react";

import "./test.scss";

const EventsList = () => {
  return (
    <section>
      <div className="leftBox">
        <div className="content">
          <h1>Events And Shows</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
        <div className="events">
          <ul>
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
