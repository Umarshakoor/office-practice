import { Grid, Container } from "@mui/material";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";

const Home = ({ posts }) => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Feed /*  posts={posts} */ />
        </Grid>
        <Grid item xs={12} md={4}>
          <Sidebar />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
