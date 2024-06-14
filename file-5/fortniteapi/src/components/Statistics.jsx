import { Container, Typography, Box, Grid } from "@mui/material";
// import ModeStandbyRoundedIcon from "@mui/icons-material/ModeStandbyRounded";
import React from "react";

function Statistics() {
  return (
    <>
      {/*       <Container sx={{ bgcolor: "blue", color: "white" }}>
        <Typography variant="h4">Statistics</Typography>
      </Container> */}
      <Box sx={{ display: "flex", justifyContent: "center", color: "#6200de" }}>
        <Typography variant="h6">Corona Virus Statistics</Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", color: "#8e9296" }}>
        <Typography variant="h6">
          Amet minim mollit non deserunt ullamco est sit
        </Typography>
      </Box>
      {/*       <Grid container>
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="h6">Total Cases</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="h6">Total Deaths</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="h6">Total Recovered</Typography>
          </Box>
        </Grid>
      </Grid> */}
      {/*       <Box
        display="flex"
        Direction="row"
        sx={{ display: "flex", direction: "row", textAlign: "center" }}
      ></Box> */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          color: "#6200de",
          marginTop: "30px",
        }}
      >
        <Box>
          <img
            height={"100px"}
            src="https://innovativegenomics.org/wp-content/uploads/2020/04/Abstract-SARS-CoV-2-in-red.png"
          />
        </Box>
        <Box>
          <img
            height={"100px"}
            src="https://innovativegenomics.org/wp-content/uploads/2020/04/Abstract-SARS-CoV-2-in-red.png"
          />
        </Box>
        <Box>
          <img
            height={"100px"}
            src="https://innovativegenomics.org/wp-content/uploads/2020/04/Abstract-SARS-CoV-2-in-red.png"
          />
        </Box>
      </Box>
      <br />
      {/* <Box
        sx={{
          border: "5px solid",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            border: "5px solid",
            borderColor: "red",
            padding: 1,
          }}
        >
          <p>Inner box 3</p>
        </Box>
        <Box
          sx={{
            border: "5px solid",
            borderColor: "maroon",
            padding: 1,
          }}
        >
          <ModeStandbyRoundedIcon />
          <p>Inner box 4</p>
        </Box>
      </Box> */}
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          marginLeft: "-5px",
        }}
      >
        <Box sx={{ justifyContent: "center", alignItems: "center" }}>
          <Typography>98,856,25</Typography>
          <Typography variant="h6">Active Case</Typography>
        </Box>
        <Box>
          <Typography>98,856,25</Typography>
          <Typography variant="h6">Death Case</Typography>
        </Box>
        <Box>
          <Typography>98,856,25</Typography>
          <Typography variant="h6">Recovered Case</Typography>
        </Box>
      </Container>
    </>
  );
}

export default Statistics;
