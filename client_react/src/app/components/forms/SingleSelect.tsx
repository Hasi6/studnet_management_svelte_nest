import React, { FC } from "react";
import { Select, MenuItem } from "@material-ui/core";

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
  options: any;
}

const SingleSelection: FC<propTypes> = ({
  input,
  label,
  fullWidth,
  type,
  options,
  meta: { touched, error }
}): JSX.Element => {
  return (
    <>
      <span className="p-float-label">
        <Select
          style={{ width: "80px" }}
          {...input}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        >
          {options.map((option: any) => (
            <MenuItem key={option.key} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
        {!touched && <label htmlFor="in">{label}</label>}
        {touched && error && (
          <label style={{ textAlign: "center", color: "darkRed" }}>
            {error}
          </label>
        )}
      </span>
    </>
  );
};

export default SingleSelection;
