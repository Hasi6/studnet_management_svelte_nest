import React, { FC } from "react";
import { Field, reduxForm } from "redux-form";
import { Button } from "@material-ui/core";
import { combineValidators, isRequired } from "revalidate";
import { connect } from "react-redux";
import TextInput from "../../forms/TextInput";
import { Formik } from "formik";
import * as Yup from "yup";

interface propTypes {
  handleSubmit: Function;
  onSubmit: Function;
}

const initialValues = { comment: "" };

const validationSchema = Yup.object().shape({
  email: Yup.string().required(),
});

const CommentInput: FC<propTypes> = ({
  handleSubmit,
  onSubmit,
}): JSX.Element => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(e: any) => console.log(e)}
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
          <TextInput
            id={"comment"}
            name="comment"
            required={true}
            label="Comment"
            fullWidth={true}
            type="text"
            value={values.comment}
            onChange={handleChange}
            errors={errors.comment}
            touch={touched.comment}
            handleBlur={handleBlur}
          />
          {values.comment}
          <Button type="submit" onClick={() => handleSubmit()}>
            Add Comment
          </Button>
        </>
      )}
    </Formik>
  );
};

const validate = combineValidators({
  comment: isRequired({ message: "Please Add Comment" }),
});

export default connect(null)(
  reduxForm({ form: "loginForm", validate })(CommentInput)
);
