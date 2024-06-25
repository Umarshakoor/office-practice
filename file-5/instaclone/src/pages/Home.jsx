import { Grid } from "@mui/material";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <Grid container sx={{ marginTop: "20px" }}>
      <Grid item xs={12} md={8}>
        <Feed />
      </Grid>
      <Grid item xs={12} md={4}>
        <Sidebar />
      </Grid>
    </Grid>
  );
};

export default Home;
