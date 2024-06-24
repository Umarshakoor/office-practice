import Post from "./Post.jsx";
import { Grid, Container } from "@mui/material";

const Feed = ({ posts }) => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Post />
          <Post />
          <Post />
        </Grid>
      </Grid>
      {posts.map((post, index) => (
        <Grid item xs={12} key={index}>
          <Post post={post} />
        </Grid>
      ))}
    </Container>
  );
};

export default Feed;
