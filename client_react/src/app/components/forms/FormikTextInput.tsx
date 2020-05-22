import React, { FC } from "react";
import { TextField } from "@material-ui/core";

interface propTypes {
  id: string;
  touched: any;
  label: string;
  name: string;
  value: string;
  error: string | undefined;
  fullWidth?: any;
  type: string;
  multiline: boolean;
  rows: number;
}

const FormikTextInput: FC<propTypes> = ({
  id,
  touched,
  label,
  name,
  value,
  error,
  fullWidth,
  type,
  multiline,
  rows,
}): JSX.Element => {
  return (
    <div id={id}>
      <span className="p-float-label" style={{ display: "flex" }}>
        {!touched && <label htmlFor="in">{label}</label>}
        <TextField
          name={name}
          value={value}
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
    </div>
  );
};

export default FormikTextInput;
