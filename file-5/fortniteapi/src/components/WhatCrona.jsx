import {
  FormControlLabel,
  FormGroup,
  Grid,
  Checkbox,
  Typography,
  Button,
  Box,
} from "@mui/material";

function WhatCrona() {
  return (
    <Grid container spacing={2} marginTop="70px">
      <Grid
        item
        xs={12}
        sm={6}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Box>
          <img
            src="https://img.freepik.com/free-photo/girl-working-laptop-mask-high-quality-photo_72229-779.jpg?t=st=1718372128~exp=1718375728~hmac=d15b5a85d4c2819a7187597c6d0ad11bdc38e56f220e26cb3be53cb0969c3bfa&w=900"
            height="250px"
          />
        </Box>
      </Grid>

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
    </Grid>
  );
}

export default WhatCrona;
