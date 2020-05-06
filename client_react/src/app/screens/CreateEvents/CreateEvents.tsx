import React, { FC } from "react";
import {
  combineValidators,
  composeValidators,
  isRequired,
  hasLengthGreaterThan,
  hasLengthLessThan
} from "revalidate";
import { connect } from "react-redux";

import "./CreateEvents.scss";
import { reduxForm, Field } from "redux-form";
import TextInput from "../../components/forms/TextInput";

interface propTypes {
  handleSubmit: Function;
}

const CreateEvents: FC<propTypes> = ({ handleSubmit }) => {
  const onSubmit = (e: any) => {
    console.log(e);
  };

  return (
    <div className="createEvent">
      <h1>Create Events</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field
          component={TextInput}
          name="firstName"
          label="First Name"
          type="text"
        />
      </form>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    userId: state.auth?.user?._id
  };
};

const validate = combineValidators({
  firstName: composeValidators(
    isRequired({ message: "First Name is Required" }),
    hasLengthGreaterThan(3)({
      message: "First Name must be between 4"
    }),
    hasLengthLessThan(10)({
      message: "First Name must be between 4 and 10 characters"
    })
  )(),
  lastName: composeValidators(
    isRequired({ message: "Last Name is Required" }),
    hasLengthGreaterThan(3)({
      message: "Last Name must be between 4"
    }),
    hasLengthLessThan(10)({
      message: "Last Name must be between 4 and 10 characters"
    })
  )(),
  gender: isRequired({ message: "Gender is Required" }),
  university: isRequired({ message: "University is Required" }),
  birthDay: isRequired({ message: "Birth Day is Required" }),
  email: isRequired({ message: "Email Required" }),
  password: composeValidators(
    isRequired({ message: "Password is Required" }),
    hasLengthGreaterThan(5)({
      message: "Password needs to be at least 6 Characters"
    })
  )()
});

export default connect(mapStateToProps)(
  reduxForm({ form: "registerForm", validate })(CreateEvents)
);
