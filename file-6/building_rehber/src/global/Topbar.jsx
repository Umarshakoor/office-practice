import { Box, Typography, IconButton } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

function Topbar() {
  return (
    <>
      <Box
        sx={{
          borderRadius: "0px 0px 40px 0px",
          backgroundColor: "#1A548A",
          height: "146px",
        }}
      >
        <Grid container>
          <Grid item marginLeft="37px" marginTop="24px">
            <Typography
              sx={{ color: "white", fontSize: "28px", fontWeight: "600" }}
            >
              Dashboard
            </Typography>
          </Grid>
        </Grid>
        <Grid container sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <Box sx={{ display: "flex" }}>
              <Box>search</Box>
            </Box>
          </Grid>
          <Grid item>
            <Box sx={{ display: "flex" }}>
              <Box>icons</Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Topbar;
