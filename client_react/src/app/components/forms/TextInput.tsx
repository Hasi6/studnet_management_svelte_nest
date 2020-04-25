import React, { FC } from "react";
import TextField from "@material-ui/core/TextField";

interface propTypes {
  onChange: Function;
  value: any;
  label: string;
  required: boolean;
  fullWidth: boolean;
  name: string;
  type?: string;
  autoFocus: boolean;
  setFocus: Function;
  input: any;
  meta: any;
}

const TextInput: FC<propTypes> = ({
  input,
  label,
  fullWidth,
  type,
  meta: { touched, error }
}): JSX.Element => {
  return (
    <>
      <TextField
        color={touched && !!error ? "secondary" : "primary"}
        {...input}
        label={label}
        fullWidth={fullWidth}
        variant="outlined"
        type={type}
        margin="normal"
      />
      {touched && error && (
        <label style={{ textAlign: "center", color: "darkRed" }}>{error}</label>
      )}
    </>
  );
};

export default TextInput;
