import React, { FC } from "react";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { connect } from "react-redux";
interface propTypes {
  comment: any;
  userId: String;
}

const SingleComment: FC<propTypes> = ({ comment, userId }): JSX.Element => {
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
      {userId && userId === comment?.user?._id && (
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon color="secondary" />
          </IconButton>
        </ListItemSecondaryAction>
      )}
    </ListItem>
  );
};

const mapStateToProps = (state: any) => {
  return {
    userId: state?.auth?.user?._id,
  };
};

export default connect(mapStateToProps)(SingleComment);
