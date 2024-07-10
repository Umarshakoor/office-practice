import { HomeOutlined, KeyboardArrowDown } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import crossdown from "../assets/crossdown.svg";
import Grid from "@mui/material/Unstable_Grid2";

function Dashboard() {
  return (
    <Box
      sx={{
        backgroundColor: "rgb(237, 237, 237)",
        padding: { xs: "10px", sm: "0" },
      }}
    >
      {/* Dashboard Top navbar */}
      <Box
        sx={{
          backgroundColor: "#fbfbfb",
          height: "auto",
          width: "100%",
          marginX: "auto",
          marginTop: "30px",
          borderRadius: "8px",
          padding: { xs: "10px", sm: "0" },
        }}
      >
        <Grid container justifyContent="space-between">
          <Grid item>
            <Button startIcon={<HomeOutlined />}>Home</Button>
          </Grid>
          <Grid item>
            <Button endIcon={<KeyboardArrowDown />}>
              <img src={crossdown} alt="crossdown" />
              Deadline
            </Button>
          </Grid>
          <Grid item>
            <Button>Projects</Button>
          </Grid>
          <Grid item>
            <Button>Requests</Button>
          </Grid>
          <Grid item>
            <Button>Activities</Button>
          </Grid>
          <Grid item>
            <Button>Material</Button>
          </Grid>
          <Grid item>
            <Button>Payment</Button>
          </Grid>
        </Grid>
      </Box>
      {/* info board */}
      <Box
        sx={{
          backgroundColor: "white",
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          width: "100%",
          maxWidth: "800px",
          height: "120px",
          marginX: "auto",
          marginTop: "15px",
          borderRadius: "25px",
        }}
      >
        <Grid container justifyContent="space-around">
          <Grid item>umar</Grid>
          <Grid item>umar</Grid>
          <Grid item>umar</Grid>
          <Grid item>umar</Grid>
        </Grid>
      </Box>
      {/* request and appointment section */}
      <Box>
        <Grid
          container
          spacing={3}
          marginX={{ xs: "0", sm: "120px" }}
          marginTop="20px"
        >
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                backgroundColor: "#a6d8da",
                height: "120px",
                borderRadius: "20px",
              }}
            >
              umar
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                backgroundColor: "#C1E1C1",
                height: "120px",
                borderRadius: "20px",
              }}
            >
              umar
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* appointments */}
      <Box>
        <Grid
          container
          spacing={3}
          marginX={{ xs: "0", sm: "120px" }}
          marginTop="20px"
        >
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                backgroundColor: "#F7DAD9",
                height: "120px",
                borderRadius: "20px",
              }}
            >
              umar
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                backgroundColor: "#FFDEAD",
                height: "120px",
                borderRadius: "20px",
              }}
            >
              umar
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                backgroundColor: "#B0E0E6",
                height: "120px",
                borderRadius: "20px",
              }}
            >
              umar
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Dashboard;
