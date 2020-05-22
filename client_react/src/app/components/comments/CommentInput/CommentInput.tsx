import React, { FC } from "react";
import { Field, reduxForm } from "redux-form";
import { Button } from "@material-ui/core";
import { combineValidators, isRequired } from "revalidate";
import { connect } from "react-redux";
import TextInput from "../../forms/TextInput";

interface propTypes {
  handleSubmit: Function;
  onSubmit: Function;
}

const CommentInput: FC<propTypes> = ({
  handleSubmit,
  onSubmit,
}): JSX.Element => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="login">
        <Field
          name="comment"
          component={TextInput}
          label="Comment"
          type="text"
        />
        <Button type="submit">Add Comment</Button>
      </div>
    </form>
  );
};

const validate = combineValidators({
  comment: isRequired({ message: "Please Add Comment" }),
});

export default connect(null)(
  reduxForm({ form: "loginForm", validate })(CommentInput)
);
