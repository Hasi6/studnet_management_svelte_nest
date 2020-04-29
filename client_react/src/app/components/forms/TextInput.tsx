import React, { FC } from "react";
import { InputText } from "primereact/inputtext";

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
        <InputText
          color={touched && !!error ? "secondary" : "primary"}
          {...input}
          label={label}
          type={type}
        />
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

export default TextInput;
