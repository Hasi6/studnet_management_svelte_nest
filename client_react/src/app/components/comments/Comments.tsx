import React, { FC } from "react";
import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction
} from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import FolderIcon from "@material-ui/icons/Folder";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
interface propTypes {
  id: string | undefined;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      maxWidth: 752
    },
    demo: {
      backgroundColor: theme.palette.background.paper
    },
    title: {
      margin: theme.spacing(4, 0, 2)
    }
  })
);

function generate(element: React.ReactElement) {
  return [0, 1, 2].map(value =>
    React.cloneElement(element, {
      key: value
    })
  );
}

const Comments: FC<propTypes> = ({ id }): JSX.Element => {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Comments</h1>
      <p>{id}</p>
      <Grid item xs={12} md={6}>
        <Typography variant="h6" className={classes.title}>
          Avatar with text and icon
        </Typography>
        <div className={classes.demo}>
          <List dense={dense}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Single-line item"
                secondary={secondary ? "Secondary text" : null}
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </div>
      </Grid>
    </div>
  );
};

export default Comments;
