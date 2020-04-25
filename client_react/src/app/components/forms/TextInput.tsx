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
}

const TextInput: FC<propTypes> = ({
  onChange,
  value,
  label,
  required,
  fullWidth,
  name,
  type,
  autoFocus,
  setFocus
}): JSX.Element => {
  return (
    <TextField
      value={value}
      variant="outlined"
      margin="normal"
      type={type || "text"}
      required={required}
      onChange={e => {
        setFocus(name);
        onChange(e.target.value);
      }}
      fullWidth={fullWidth}
      label={label}
      name={name}
      autoFocus={autoFocus}
    />
  );
};

export default TextInput;
