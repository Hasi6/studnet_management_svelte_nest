import React, { FC } from "react";
import { Grid } from "@material-ui/core";
import {
  combineValidators,
  isRequired,
  composeValidators,
  hasLengthGreaterThan,
  hasLengthLessThan
} from "revalidate";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { registerUser } from "../../../../redux/actions/auth/auth.actions";
import TextInput from "../../../../components/forms/TextInput";
import CalenderComponent from "../../../../components/forms/Calander";

interface propTypes {
  registerUser: Function;
  handleSubmit: Function;
}

const RegisterForm: FC<propTypes> = ({
  registerUser,
  handleSubmit
}): JSX.Element => {
  const onSubmit = (e: any) => {
    console.log(e);
  };

  return (
    <div>
      <h1>Create an Account</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item md={6} sm={6} xs={6} xl={6} lg={6}>
            <Field
              name="firstName"
              component={TextInput}
              label="First Name"
              type="text"
            />
          </Grid>
          <Grid item md={6} sm={6} xs={6} xl={6} lg={6}>
            <Field
              name="lastName"
              component={TextInput}
              label="Last Name"
              type="text"
            />
          </Grid>
        </Grid>
        <Field
          name="birthDay"
          component={CalenderComponent}
          viewDate="01/03/3020"
        />
      </form>
    </div>
  );
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
  email: isRequired({ message: "Email Required" }),
  password: composeValidators(
    isRequired({ message: "Password is Required" }),
    hasLengthGreaterThan(5)({
      message: "Password needs to be at least 6 Characters"
    })
  )()
});

export default connect(null, {
  registerUser
})(reduxForm({ form: "registerForm", validate })(RegisterForm));
