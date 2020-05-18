import React, { FC } from "react";
import { TextField } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

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

  const classes = useStyles();

  return (
    <>
      <span className="p-float-label">
        <TextField
          {...input}
          id="date"
          label="Birthday"
          type="date"
          defaultValue="2017-05-24"
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

export default CalenderComponent;
