import React, { FC } from "react";
import { TextField } from "@material-ui/core";

interface propTypes {
  id: string;
  touched: any;
  name: string;
  label: string;
  fullWidth?: any;
  value: string;
  error: string | undefined;
  type?: string;
  multiline: boolean;
  rows?: number;
  onChange: any;
  onBlur: any;
}

const FormikTextInput: FC<propTypes> = ({
  id,
  touched,
  label,
  name,
  value,
  error,
  fullWidth,
  onChange,
  onBlur,
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
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          color={touched && !!error ? "secondary" : "primary"}
          fullWidth={fullWidth}
          type={type ? type : "text"}
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
