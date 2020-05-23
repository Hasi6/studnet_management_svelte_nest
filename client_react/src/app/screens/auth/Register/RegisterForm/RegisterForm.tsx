import React, { FC } from 'react'
import { Grid, Button } from '@material-ui/core'
import {
  combineValidators,
  isRequired,
  composeValidators,
  hasLengthGreaterThan,
  hasLengthLessThan,
} from 'revalidate'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { registerUser } from '../../../../redux/actions/auth/auth.actions'
import TextInput from '../../../../components/forms/TextInput'
import CalenderComponent from '../../../../components/forms/Calander'
import SingleSelection from '../../../../components/forms/SingleSelect'
import { Formik } from 'formik'
import * as Yup from 'yup'

interface propTypes {
  registerUser: Function
  handleSubmit: Function
}

const validationSchema = Yup.object().shape({
  firstName: Yup.string().email().required(),
  lastName: Yup.string().email().required(),
  email: Yup.string().email().required(),
  university: Yup.string().email().required(),
  birthDay: Yup.string().email().required(),
  gender: Yup.string().email().required(),
  password: Yup.string().required().min(6).max(16),
})

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  university: '',
  birthDay: '',
  gender: '',
  password: '',
}

const RegisterForm: FC<propTypes> = ({
  registerUser,
  handleSubmit,
}): JSX.Element => {
  const onSubmit = (e: any) => {
    registerUser(e)
  }

  return (
    <div>
      <h1>Create an Account</h1>
      {/**<form onSubmit={handleSubmit(onSubmit)}>
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
        <br />
        <Grid container>
          <Grid item md={6} sm={6} xs={6} xl={6} lg={6}>
            <Field
              name="email"
              component={TextInput}
              label="Email"
              type="text"
            />
          </Grid>
          <Grid item md={6} sm={6} xs={6} xl={6} lg={6}>
            <Field
              name="university"
              component={SingleSelection}
              label="University"
              options={[
                { label: "UOK", value: "UOK", key: "UOK" },
                { label: "UOP", value: "UOP", key: "UOP" },
                { label: "UOC", value: "UOC", key: "UOC" }
              ]}
            />
          </Grid>
        </Grid>
        <br />
        <Grid item md={12} sm={12} xs={12} xl={12} lg={12}>
          <Field
            name="birthDay"
            component={CalenderComponent}
            label="Birth Day"
          />
        </Grid>
        <br />
        <Grid item md={12} sm={12} xs={12} xl={12} lg={12}>
          <Field
            name="password"
            component={TextInput}
            label="Password"
            type="password"
          />
        </Grid>
        <br />
        <Grid item md={12} sm={12} xs={12} xl={12} lg={12}>
          <Field
            name="gender"
            component={SingleSelection}
            label="Gender"
            options={[
              { label: "Male", value: "Male", key: "Male" },
              { label: "Female", value: "Female", key: "Female" },
              { label: "Other", value: "Other", key: "Other" }
            ]}
          />
        </Grid>
        <Button type="submit">Submit</Button>
      </form> */}
    </div>
  )
}

const validate = combineValidators({
  firstName: composeValidators(
    isRequired({ message: 'First Name is Required' }),
    hasLengthGreaterThan(3)({
      message: 'First Name must be between 4',
    }),
    hasLengthLessThan(10)({
      message: 'First Name must be between 4 and 10 characters',
    }),
  )(),
  lastName: composeValidators(
    isRequired({ message: 'Last Name is Required' }),
    hasLengthGreaterThan(3)({
      message: 'Last Name must be between 4',
    }),
    hasLengthLessThan(10)({
      message: 'Last Name must be between 4 and 10 characters',
    }),
  )(),
  gender: isRequired({ message: 'Gender is Required' }),
  university: isRequired({ message: 'University is Required' }),
  birthDay: isRequired({ message: 'Birth Day is Required' }),
  email: isRequired({ message: 'Email Required' }),
  password: composeValidators(
    isRequired({ message: 'Password is Required' }),
    hasLengthGreaterThan(5)({
      message: 'Password needs to be at least 6 Characters',
    }),
  )(),
})

export default connect(null, {
  registerUser,
})(reduxForm({ form: 'registerForm', validate })(RegisterForm))
