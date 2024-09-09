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
    </Container>
  );
};

export default Feed;
