import React, { FC } from "react";
import { TextField } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200
    }
  })
);

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

const DataTimeFiled: FC<propTypes> = ({
  input,
  label,
  fullWidth,
  type,
  multiline,
  rows,
  meta: { touched, error }
}) => {
  const classes = useStyles();

  return (
    <>
      <span className="p-float-label">
        <TextField
          {...input}
          id="datetime-local"
          type="datetime-local"
          className={classes.textField}
          InputLabelProps={{
            shrink: true
          }}
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

export default DataTimeFiled;
