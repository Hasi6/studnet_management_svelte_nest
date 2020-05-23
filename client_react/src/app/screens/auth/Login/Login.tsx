import React, { FC } from 'react'
import { Grid } from '@material-ui/core'
import { connect } from 'react-redux'
import { Formik } from 'formik'
import * as Yup from 'yup'

import { loginUser } from '../../../redux/actions/auth/auth.actions'
import { IAuthUser } from '../../../model/User.model'

import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import FormikTextInput from '../../../components/forms/FormikTextInput'

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required().min(6).max(16),
})

const initialValues = {
  email: '',
  password: '',
}

interface propTypes {
  loginUser: Function
}

const Login: FC<propTypes> = ({ loginUser }): JSX.Element => {
  const history = useHistory()

  const onSubmit = (e: IAuthUser) => {
    loginUser(e, history)
  }
  // as

  return (
    <div className="loginSection">
      <Grid container spacing={4}>
        <Grid item md={6} sm={6} xs={6} xl={6} lg={6}>
          <h1>Login Section</h1>
        </Grid>
        <Grid item md={6} sm={6} xs={6} xl={6} lg={6}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({
              handleChange,
              handleBlur,
              values,
              errors,
              handleSubmit,
              touched,
            }) => (
              <div className="login">
                <FormikTextInput
                  error={errors.email}
                  type="email"
                  id={'email'}
                  touched={touched.email}
                  label="Email"
                  multiline={false}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                />
                <FormikTextInput
                  error={errors.password}
                  type="password"
                  id={'Password'}
                  touched={touched.password}
                  label="Password"
                  multiline={false}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  fullWidth={false}
                  name="password"
                />
                <Button type="submit" onClick={() => handleSubmit()}>
                  Login
                </Button>
              </div>
            )}
          </Formik>
        </Grid>
      </Grid>
    </div>
  )
}

export default connect(null, {
  loginUser,
})(Login)
