import React from "react";
import {
  Box,
  Typography,
  Grid,
  FormGroup,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

function Protect() {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", color: "#6200de" }}>
        <Typography variant="h5">How to Protect YourSelf?</Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", color: "#8e9296" }}>
        <Typography variant="h6">
          Amet minim mollit non deserunt ullamco est sit na coder is medicine
        </Typography>
      </Box>
      <Grid
        container
        flexGrow={1}
        spacing={1}
        alignItems={"center"}
        sx={{ height: "300px" }}
      >
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              alignContent: "space-around",
              justifyContent: "center",
              alignItems: "baseline",
            }}
          >
            <Typography variant="h5" color={"#6200de"}>
              <b>You should Do</b>
            </Typography>
            <br />
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked />}
                label="Have to talk about thid Covid 19 Virus?"
              />
              <FormControlLabel
                control={<Checkbox checked />}
                label="Have to talk about thid Covid 19 Virus?"
              />
              <FormControlLabel
                control={<Checkbox checked />}
                label="Have to talk about thid Covid 19 Virus?"
              />
            </FormGroup>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              alignContent: "space-around",
              justifyContent: "center",
              alignItems: "baseline",
            }}
          >
            <Typography variant="h5" color={"#6200de"}>
              <b>You should Avoid</b>
            </Typography>
            <br />

            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked />}
                label="Have to talk about thid Covid 19 Virus?"
              />
              <FormControlLabel
                control={<Checkbox checked />}
                label="Have to talk about thid Covid 19 Virus?"
              />
              <FormControlLabel
                control={<Checkbox checked />}
                label="Have to talk about thid Covid 19 Virus?"
              />
            </FormGroup>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              alignContent: "space-around",
              justifyContent: "center",
              alignItems: "baseline",
            }}
          >
            <img
              src="https://www.sterloc.com/blog/wp-content/uploads/2022/04/Hand-Hygiene.jpg"
              height={"170px"}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Protect;
