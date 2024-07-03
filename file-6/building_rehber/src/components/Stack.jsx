import React from "react";
import {
  Box,
  //   Container,
  Typography,
  CircularProgress,
  TextField,
  InputAdornment,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

function Stack() {
  return (
    <>
      {/* // Container for circlular progrss and text */}
      <Grid container marginBottom="20px">
        <Grid item xs={6} mdOffset={4}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            position="relative"
          >
            <CircularProgress variant="determinate" value={75} />
            <Box
              top={0}
              left={0}
              bottom={0}
              right={0}
              position="absolute"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                variant="caption"
                component="div"
                color="textSecondary"
              >
                75%
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box display="flex" alignItems="center" height="100%">
            <Typography>Advance Report</Typography>
          </Box>
        </Grid>
      </Grid>
      {/* // Container for search */}
      <Grid container>
        <Grid item xs={12}>
          {/* Search field here */}
          <Box>
            <TextField
              id="search"
              label="Search"
              variant="outlined"
              size="small"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {/* <SearchIcon /> */}
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Grid>
      </Grid>

      {/* // Container for cards */}
      <Grid container>
        <Grid item xs={12}>
          {/* Container for text and image */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "15px",
            }}
          >
            {/* Box for text */}
            <Box
              sx={{
                height: "70px",
                width: "100%",
                display: "flex",
                alignItems: "center",
                backgroundImage:
                  "linear-gradient(to right, rgba(255, 255, 255, 255), transparent), url(https://i.ytimg.com/vi/5cRlIuGVx-U/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCC1K-jOl955zABHZuq_Zx9_o9BEg)",
                backgroundSize: "contain",
                backgroundColor: "#9c9b9b",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right",
                marginLeft: "24px",
              }}
            >
              <Typography variant="caption">Underbody</Typography>
            </Box>

            {/* Box for image */}
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              background:
                "background: linear-gradient(144deg, transparent 0%, rgba(67, 172, 225, 0.137) 0%, rgba(72, 171, 224, 0.134) 17%, #48abe0 100%) 46% 45%;",
            }}
          >
            <img
              height={"90px"}
              src="https://i.ytimg.com/vi/5cRlIuGVx-U/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCC1K-jOl955zABHZuq_Zx9_o9BEg"
              alt="img"
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Stack;
