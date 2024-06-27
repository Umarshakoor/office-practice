/* import React from "react";
import {
  FormControlLabel,
  FormGroup,
  Grid,
  Checkbox,
  Typography,
  Button,
  Box,
} from "@mui/material";
import virus from "./virus.png";

function Dangerous() {
  return (
    <Grid
      container
      spacing={2}
      marginTop="70px"
      sx={{ flexDirection: "row-reverse" }}
    >
      <Grid item xs={12} sm={6}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img src={virus} height="250px" />
        </Box>
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" color={"#6200de"}>
            What is Corona Virus?
          </Typography>
          <br />
          <Typography paragraph="true" color={"#8e9296"} gutterBottom>
            Amet minim mollit non deserunt ullamco est sit aliqua
            <br /> dolor do amet sint. Velit officia consequat duis
            <br /> enim velit mollit. This is the best Part of the
          </Typography>
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
          <br />
          <Button
            variant="contained"
            sx={{
              bgcolor: "#6200de",
              borderRadius: "30px",
            }}
          >
            How to Learn
          </Button>
        </Grid>
      </Box>
    </Grid>
  );
}

export default Dangerous;
 */

import React from "react";
import {
  FormControlLabel,
  FormGroup,
  Grid,
  Checkbox,
  Typography,
  Button,
  Box,
} from "@mui/material";
import virus from "./virus.png";

function Dangerous() {
  return (
    <Grid
      container
      spacing={2}
      marginTop="70px"
      sx={{ flexDirection: "row-reverse" }}
    >
      <Grid item xs={12} sm={6}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img src={virus} height="200px" />
        </Box>
      </Grid>

      <Grid item xs={12} sm={6}>
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
            Why It is Dangerous?
          </Typography>
          <br />
          <Typography paragraph="true" color={"#8e9296"} gutterBottom>
            Amet minim mollit non deserunt ullamco est sit aliqua
            <br /> dolor do amet sint. Velit officia consequat duis
            <br /> enim velit mollit. This is the best Part of the
          </Typography>
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
          <br />
          <Button
            variant="contained"
            sx={{
              bgcolor: "#6200de",
              borderRadius: "30px",
            }}
          >
            How to Learn
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Dangerous;
