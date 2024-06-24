import { Grid } from "@mui/material";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import PropTypes from "prop-types";

const Home = ({ posts }) => {
  return (
    <Grid container sx={{ marginTop: "20px" }}>
      <Grid item xs={12} md={8}>
        <Feed posts={posts} log />
      </Grid>
      <Grid item xs={12} md={4}>
        <Sidebar />
      </Grid>
    </Grid>
  );
};

export default Home;
