import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";

function Steps() {
  return (
    <>
      <Grid container>
        <Grid item>
          <Box>
            <CoronavirusIcon sx={{ color: "blue", fontSize: 60 }} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Steps;
