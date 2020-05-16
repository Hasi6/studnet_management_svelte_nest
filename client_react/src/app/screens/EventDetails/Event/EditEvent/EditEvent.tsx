import React, { FC } from "react";
import {
  combineValidators,
  composeValidators,
  isRequired,
  hasLengthGreaterThan,
  hasLengthLessThan
} from "revalidate";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";

interface propTypes {
  handleSubmit: Function;
}

const EditEvent: FC<propTypes> = ({ handleSubmit }): JSX.Element => {
  return (
    <div>
      <h1>Handle Event</h1>
    </div>
  );
};

const validate = combineValidators({
  title: composeValidators(
    isRequired({ message: "Title is Required" }),
    hasLengthGreaterThan(3)({
      message: "Title must be between 4"
    }),
    hasLengthLessThan(20)({
      message: "Title must be between 4 and 20 characters"
    })
  )(),
  description: composeValidators(
    isRequired({ message: "Description is Required" }),
    hasLengthGreaterThan(50)({
      message: "Description must be Longer than 50 Characters"
    }),
    hasLengthLessThan(250)({
      message: "Description must be Lower than 250 Characters"
    })
  )(),
  dateTime: isRequired({ message: "Date and Time is Required" })
});

const mapStateToProps = (state: any, ownProps: any) => {
  console.log(ownProps);
  return {
    prop: state.prop
  };
};

export default connect(mapStateToProps)(
  reduxForm({ form: "editEvent", validate })(EditEvent)
);
