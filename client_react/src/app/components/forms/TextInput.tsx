import React, { FC } from "react";
import { InputText } from "primereact/inputtext";
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
      <span className="p-float-label">
        {!touched && <label htmlFor="in">{label}</label>}
        <TextField
          {...input}
          color={touched && !!error ? "secondary" : "primary"}
          fullWidth={fullWidth}
          type={type}
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
