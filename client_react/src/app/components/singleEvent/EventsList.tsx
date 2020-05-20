/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useState, useEffect } from "react";
import { connect } from "react-redux";
import InfiniteScroll from "react-infinite-scroller";

import "./EventsList.scss";
import SingleEvent from "./SingleEvent";
import { getEvents } from "../../redux/actions/events/events.actions";
import { IEvents } from "../../model/User.model";

interface propTypes {
  getEvents: Function;
  events: IEvents[];
  pages: number;
}

const EventsList: FC<propTypes> = ({
  getEvents,
  events,
  pages,
}): JSX.Element => {
  const [page, setPage] = useState(1);

  // Call Get Events Action
  const getNewEvents = () => {
    if (pages === 0 || page < pages) {
      getEvents({ page });
      setPage(page + 1);
      console.log("Hasi");
    }
  };

  useEffect(() => {
    getNewEvents();
  }, []);

  return (
    <section>
      <div className="leftBox">
        <div className="content">
          <h1>All Events And Shows</h1>
          <p>
            This shows you all to Upcoming Events in Any University is Sri
            Lanka. If You wish to participate you can join the events. If that
            events change we will inform you from an email for that please
            provide a valid email Address when you register
          </p>
        </div>
        <div className="events">
          <InfiniteScroll
            pageStart={0}
            loadMore={() => getNewEvents()}
            hasMore={page < pages}
            initialLoad={false}
          >
            <ul>
              {events.map((event: IEvents) => (
                <SingleEvent key={event._id} event={event._id} />
              ))}
            </ul>
          </InfiniteScroll>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state: any) => {
  return {
    events: state?.events?.events,
    pages: state?.events?.pages,
  };
};

export default connect(mapStateToProps, { getEvents })(EventsList);
