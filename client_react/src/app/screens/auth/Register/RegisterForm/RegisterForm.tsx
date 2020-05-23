import React, { FC } from 'react'
import { Grid, Button } from '@material-ui/core'

import { connect } from 'react-redux'
import { registerUser } from '../../../../redux/actions/auth/auth.actions'
import { FormikCalenderComponent } from '../../../../components/forms/Calander'
import { FormikSingleSelection } from '../../../../components/forms/SingleSelect'
import { Formik } from 'formik'
import * as Yup from 'yup'
import FormikTextInput from '../../../../components/forms/FormikTextInput'

interface propTypes {
  registerUser: Function
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  university: Yup.string().required(),
  birthDay: Yup.string().required(),
  gender: Yup.string().required(),
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

const RegisterForm: FC<propTypes> = ({ registerUser }): JSX.Element => {
  const onSubmit = (e: any) => {
    registerUser(e)
  }

  return (
    <div>
      <h1>Create an Account</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({
          handleChange,
          handleBlur,
          values,
          errors,
          handleSubmit,
          touched,
        }) => (
          <>
            <Grid container spacing={3}>
              <Grid item md={6} sm={6} xs={6} xl={6} lg={6}>
                <FormikTextInput
                  error={errors.firstName}
                  type="firstName"
                  id={'firstName'}
                  touched={touched.firstName}
                  value={values.firstName}
                  name="firstName"
                  label="First Name"
                  multiline={false}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item md={6} sm={6} xs={6} xl={6} lg={6}>
                <FormikTextInput
                  error={errors.lastName}
                  type="lastName"
                  id={'lastName'}
                  touched={touched.lastName}
                  value={values.lastName}
                  name="lastName"
                  label="Last Name"
                  multiline={false}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item md={6} sm={6} xs={6} xl={6} lg={6}>
                <FormikTextInput
                  error={errors.email}
                  type="email"
                  id={'email'}
                  touched={touched.email}
                  value={values.email}
                  name="email"
                  label="Email"
                  multiline={false}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item md={6} sm={6} xs={6} xl={6} lg={6}>
                <FormikSingleSelection
                  error={errors.university}
                  id={'university'}
                  touched={touched.university}
                  value={values.university}
                  name="university"
                  label="University"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  options={[
                    { label: 'UOK', value: 'UOK', key: 'UOK' },
                    { label: 'UOP', value: 'UOP', key: 'UOP' },
                    { label: 'UOC', value: 'UOC', key: 'UOC' },
                  ]}
                />
              </Grid>
              <Grid>
                <Grid item md={12} sm={12} xs={12} xl={12} lg={12}>
                  <FormikCalenderComponent
                    error={errors.birthDay}
                    id={'birthDay'}
                    touched={touched.birthDay}
                    value={values.birthDay}
                    name="birthDay"
                    label="BirthDay"
                    fullWidth={false}
                    defaultValue="2019-01-01"
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
              <br />
              <Grid item md={12} sm={12} xs={12} xl={12} lg={12}>
                <FormikTextInput
                  error={errors.password}
                  type="password"
                  id={'password'}
                  touched={touched.password}
                  value={values.password}
                  name="password"
                  label="Password"
                  multiline={false}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item md={12} sm={12} xs={12} xl={12} lg={12}>
                <FormikSingleSelection
                  error={errors.gender}
                  id={'gender'}
                  touched={touched.gender}
                  value={values.gender}
                  name="gender"
                  label="Gender"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  options={[
                    { label: 'MALE', value: 'MALE', key: 'MALE' },
                    { label: 'FEMALE', value: 'FEMALE', key: 'FEMALE' },
                    { label: 'OTHER', value: 'OTHER', key: 'OTHER' },
                  ]}
                />
              </Grid>
            </Grid>
            <Button type="submit" onClick={() => handleSubmit()}>
              Submit
            </Button>
          </>
        )}
      </Formik>
    </div>
  )
}

export default connect(null, {
  registerUser,
})(RegisterForm)
