import React, { FC } from "react";
import {
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
import { Image } from "@material-ui/icons";

interface propTypes {
  comment: any;
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

const SingleComment: FC<propTypes> = ({ comment }): JSX.Element => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <img
            style={{ width: 30, height: 30, borderRadius: "50%" }}
            src={comment?.user?.image}
            alt="commented_user"
          />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={comment?.comment}
        secondary={comment?.user?.username}
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon color="secondary" />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default SingleComment;
