import { Typography, Box, Grid } from "@mui/material";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";

function Steps() {
  return (
    <>
      <Grid
        container
        sx={{
          marginTop: "30px",
          flexDirection: "row",
          justifyContent: "space-around",
          padding: "0 80px",
        }}
      >
        <Grid item>
          <CoronavirusIcon sx={{ color: "#6200de", fontSize: 60 }} />
        </Grid>
        <Grid item>
          <Typography color={"#6200de"} variant="h5">
            Symptoms
          </Typography>
          <Typography color={"#8e9296"} variant="h6">
            Have to talk about
          </Typography>
        </Grid>
        <Grid item>
          <CoronavirusIcon sx={{ color: "#6200de", fontSize: 60 }} />
        </Grid>
        <Grid item>
          <Typography color={"#6200de"} variant="h5">
            Symptoms
          </Typography>
          <Typography color={"#8e9296"} variant="h6">
            Have to talk about
          </Typography>
        </Grid>
        <Grid item>
          <CoronavirusIcon sx={{ color: "#6200de", fontSize: 60 }} />
        </Grid>
        <Grid item>
          <Typography color={"#6200de"} variant="h5">
            Symptoms
          </Typography>
          <Typography color={"#8e9296"} variant="h6">
            Have to talk about
          </Typography>
        </Grid>
        <Grid item>
          <CoronavirusIcon sx={{ color: "#6200de", fontSize: 60 }} />
        </Grid>
        <Grid item>
          <Typography color={"#6200de"} variant="h5">
            Symptoms
          </Typography>
          <Typography color={"#8e9296"} variant="h6">
            Have to talk about
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default Steps;
