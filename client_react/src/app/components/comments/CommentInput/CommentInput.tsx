import React, { FC } from "react";
import { Button } from "@material-ui/core";
import { Formik } from "formik";
import * as Yup from "yup";
import FormikTextInput from "../../forms/FormikTextInput";

interface propTypes {
  onSubmit: Function;
}

const initialValues = { comment: "" };

const validationSchema = Yup.object().shape({
  comment: Yup.string().required(),
});

const CommentInput: FC<propTypes> = ({ onSubmit }): JSX.Element => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(e: any) => onSubmit(e)}
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
          <FormikTextInput
            id={"comment"}
            touched={touched.comment}
            name="comment"
            label="Comment"
            fullWidth={true}
            value={values.comment}
            error={errors.comment}
            onChange={handleChange}
            onBlur={handleBlur}
            multiline={false}
          />
          <Button type="submit" onClick={() => handleSubmit()}>
            Add Comment
          </Button>
        </>
      )}
    </Formik>
  );
};

export default CommentInput;
