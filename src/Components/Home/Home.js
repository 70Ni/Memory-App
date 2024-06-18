import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import { getPosts } from "../../actions/posts";
import { useDispatch } from "react-redux";
import useStyles from "../../styles";

import Posts from "../Posts/Posts";
import Form from "../Form/Form";

function Home() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [currentId, setCurrentId] = useState();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <div>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </div>
  );
}

export default Home;
