import React, { FC } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { List } from "@material-ui/core";
import { connect } from "react-redux";
import SingleParticipants from "./SingleParticipants/SingleParticipants";
import { IEvents } from "../../../model/User.model";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: "36ch",
      backgroundColor: "grey",
      maxHeight: "600px",
      overflow: "auto"
    },
    inline: {
      display: "inline"
    }
  })
);

interface propTypes {
  id: string;
  participants: any;
}

const Participants: FC<propTypes> = ({ id, participants }): JSX.Element => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {participants?.length === 0 && <p>No Participants</p>}
      {participants?.length > 0 && <p>{participants.length} Participants</p>}
      {participants?.map((parti: any) => (
        <SingleParticipants key={parti._id} parti={parti} />
      ))}
    </List>
  );
};

const mapStateToProps = (state: any, ownProps: any) => {
  const events = state?.events?.events.filter(
    (eve: IEvents) => eve._id === ownProps.id
  )[0];
  return {
    participants: events?.participants
  };
};

export default connect(mapStateToProps)(Participants);
