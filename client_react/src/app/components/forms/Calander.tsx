import React, { FC } from "react";
import { Calendar } from "primereact/calendar";

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

const CalenderComponent: FC<propTypes> = ({
  input,
  label,
  meta: { touched, error }
}): JSX.Element => {
  return (
    <>
      <span className="p-float-label">
        <Calendar {...input} />
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

export default CalenderComponent;
