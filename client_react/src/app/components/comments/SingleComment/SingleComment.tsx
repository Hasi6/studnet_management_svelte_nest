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

interface propTypes {}

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

const SingleComment: FC<propTypes> = (): JSX.Element => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <img
            style={{ width: 30, height: 30, borderRadius: "50%" }}
            src={
              "https://firebasestorage.googleapis.com/v0/b/whats-app-clone-rn.appspot.com/o/test%2F00100sPORTRAIT_00100_BURST20191216155253688_COVER_1_nocrop.JPEG?alt=media&token=9722728a-38a2-4b63-b717-05dd3839b6ed"
            }
            alt="commented_user"
          />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="Single-line item" secondary={"Username"} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon color="secondary" />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default SingleComment;
