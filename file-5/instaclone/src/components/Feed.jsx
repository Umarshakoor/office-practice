import Post from "./Post.jsx";
import { Grid, Container } from "@mui/material";

const Feed = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Post />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Post />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Post />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Feed;

/* import React from "react";
import Post from "./Post";
import { Grid, Container } from "@mui/material";

const Feed = ({ posts }) => {
  return (
    <Container>
      <Grid container spacing={2}>
        {posts.map((post, index) => (
          <Grid item xs={12} key={index}>
            <Post post={post} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Feed; */
