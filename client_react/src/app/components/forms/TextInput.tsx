import React, { FC } from "react";
import { TextField } from "@material-ui/core";

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
  multiline?: boolean;
  rows?: number;
}

const TextInput: FC<propTypes> = ({
  input,
  label,
  fullWidth,
  type,
  multiline,
  rows,
  meta: { touched, error }
}): JSX.Element => {
  return (
    <>
      <span className="p-float-label" style={{ display: "flex" }}>
        {!touched && <label htmlFor="in">{label}</label>}
        <TextField
          {...input}
          color={touched && !!error ? "secondary" : "primary"}
          fullWidth={fullWidth}
          type={type}
          multiline={multiline || false}
          rows={rows || 0}
          margin="normal"
        />
        {touched && error && (
          <label style={{ textAlign: "center", color: "darkRed" }}>
            {error}
          </label>
        )}
      </span>
    </>
  );
};

export default TextInput;
