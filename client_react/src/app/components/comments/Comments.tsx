import React, { FC, useEffect, useState } from "react";
import { Grid, List } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import SingleComment from "./SingleComment/SingleComment";
import CommentInput from "./CommentInput/CommentInput";
import { graphqlRequest } from "../../graphql/index.graphql";
import { getCommentsQuery } from "../../graphql/query/getComments";

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

const Comments: FC<propTypes> = ({ id }): JSX.Element => {
  const classes = useStyles();
  const [dense, setDense] = useState(true);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments();
  });

  const getComments = async () => {
    const res = await graphqlRequest(getCommentsQuery, { event: id });
    console.log(res);
  };

  const onSubmit = () => {};

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Comments</h1>
      <p>{id}</p>
      <Grid item xs={12} md={6}>
        <CommentInput
          onSubmit={() => {
            alert();
          }}
        />
        <div className={classes.demo}>
          <List dense={dense}>
            <SingleComment />
          </List>
        </div>
      </Grid>
    </div>
  );
};

export default Comments;
