/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useState } from "react";
import { Grid, List } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import SingleComment from "./SingleComment/SingleComment";
import CommentInput from "./CommentInput/CommentInput";
import { graphqlRequest } from "../../graphql/index.graphql";
import { getCommentsQuery } from "../../graphql/query/getComments";
import { addCommentMutation } from "../../graphql/mutations/addComment";
import { Subscription } from "react-apollo";
import { commentsSubscriptions } from "../../graphql/subscriptions/comments.subscriptions";
import { connect } from "react-redux";
interface propTypes {
  id: string | undefined;
  userId: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
  })
);

const Comments: FC<propTypes> = ({ id, userId }): JSX.Element => {
  const classes = useStyles();
  const [dense, setDense] = useState(true);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    const res = await graphqlRequest(getCommentsQuery, { event: id });
    if (res) {
      setComments(res?.getComments);
    }
  };

  const onSubmit = async (message: any) => {
    const variables = { ...message, event: id };
    const res = await graphqlRequest(addCommentMutation, variables);
    if (res) {
      const comment: any = [res?.addComment, ...comments];
      setComments(comment);
    }
  };

  return (
    <div>
      <Subscription
        subscription={commentsSubscriptions}
        variables={{ id }}
        onSubscriptionData={({
          subscriptionData,
        }: {
          subscriptionData: any;
        }) => {
          const newlyAddedAllComments: any = [
            subscriptionData.data.newCommentAdded,
            ...comments,
          ];
          setComments(newlyAddedAllComments);
        }}
      />
      <h1 style={{ textAlign: "center" }}>Comments</h1>
      <p>{id}</p>
      <Grid item xs={12} md={6}>
        {userId && <CommentInput onSubmit={onSubmit} />}
        <div className={classes.demo}>
          <List dense={dense}>
            {comments?.map((comment: any) => (
              <SingleComment key={comment?._id} comment={comment} />
            ))}
          </List>
        </div>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    userId: state?.auth?.user?._id,
  };
};

export default connect(mapStateToProps)(Comments);
