import React, { FC } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

import {
  Typography,
  Avatar,
  ListItemAvatar,
  ListItemText,
  Divider,
  ListItem
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: "36ch",
      backgroundColor: theme.palette.background.paper
    },
    inline: {
      display: "inline"
    }
  })
);

interface propTypes {
  parti: any;
}

const SingleParticipants: FC<propTypes> = ({ parti }): JSX.Element => {
  const classes = useStyles();

  return (
    <div>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={parti?.username} src={parti?.image} />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {parti?.username}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </div>
  );
};

export default SingleParticipants;
