/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect } from "react";
import {
  combineValidators,
  composeValidators,
  isRequired,
  hasLengthGreaterThan,
  hasLengthLessThan,
} from "revalidate";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import TextInput from "../../../../components/forms/TextInput";
import DataTimeFiled from "../../../../components/forms/DataTimeFiled";
import { IEvents } from "../../../../model/User.model";
import { getSingleEvent } from "../../../../redux/actions/events/events.actions";

interface propTypes {
  handleSubmit: Function;
  event: IEvents;
  history: any;
  getSingleEvent: Function;
  match: any;
}

const EditEvent: FC<propTypes> = ({
  handleSubmit,
  event,
  history,
  match,
  getSingleEvent,
}): JSX.Element => {
  const getEvent = () => {
    if (!event._id) {
      getSingleEvent({ id: match?.params?.id }, history);
    }
  };

  useEffect(() => {
    getEvent();
  }, []);

  if (!event._id) {
    history.push(`/event/${match?.params?.id}`);
  }

  return (
    <div className="containers">
      <h3>Edit Event</h3>
      <Field component={TextInput} name="title" label="Title" type="text" />
      <Field
        component={TextInput}
        name="description"
        label="Description"
        multiline={true}
        rows={4}
        type="text"
      />

      {/*<GooglePlacesAutocomplete
        onSelect={async e => {
          let loc: any = { location: e.description };
          const geoMetry = await geocodeByPlaceId(e.place_id);
          loc = { ...loc, ...(await getLatLng(geoMetry[0])) };
          setLocation(loc);
        }}
      /> */}
      <br />
      <br />

      <Field component={DataTimeFiled} name="dateTime" label="Date and Time" />
      <br />
      <br />
    </div>
  );
};

const validate = combineValidators({
  title: composeValidators(
    isRequired({ message: "Title is Required" }),
    hasLengthGreaterThan(3)({
      message: "Title must be between 4",
    }),
    hasLengthLessThan(20)({
      message: "Title must be between 4 and 20 characters",
    })
  )(),
  description: composeValidators(
    isRequired({ message: "Description is Required" }),
    hasLengthGreaterThan(50)({
      message: "Description must be Longer than 50 Characters",
    }),
    hasLengthLessThan(250)({
      message: "Description must be Lower than 250 Characters",
    })
  )(),
  dateTime: isRequired({ message: "Date and Time is Required" }),
});

const mapStateToProps = (state: any, ownProps: any) => {
  const { id } = ownProps?.match?.params;

  const event =
    state?.events?.events.filter((event: IEvents) => event._id === id)[0] || {};
  return {
    event,
    initialValues: event,
    userId: state?.auth?.user?._id,
  };
};
export default connect(mapStateToProps, { getSingleEvent })(
  reduxForm({ form: "editEvent", validate })(EditEvent)
);
