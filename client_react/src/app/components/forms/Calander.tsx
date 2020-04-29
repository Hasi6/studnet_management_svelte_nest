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
  meta: { touched, error }
}): JSX.Element => {
  return (
    <>
      <Calendar {...input} />
    </>
  );
};

export default CalenderComponent;
