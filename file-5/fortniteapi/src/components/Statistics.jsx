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
