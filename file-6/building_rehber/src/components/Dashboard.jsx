import { HomeOutlined, KeyboardArrowDown } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import crossdown from "../assets/crossdown.svg";

import Grid from "@mui/material/Unstable_Grid2";

function Dashboard() {
  return (
    <>
      <Box backgroundColor="rgb(237, 237, 237)">
        {/* Dashboard Top navbar */}
        <Box
          sx={{
            backgroundColor: "#fbfbfb",
            height: "30px",
            width: "900px",
            marginX: "auto",
            marginTop: "30px",
            borderRadius: "8px",
          }}
        >
          <Grid container justifyContent={"space-between"}>
            <Grid item>
              <Button startIcon={<HomeOutlined />}>Home</Button>
            </Grid>
            <Grid item>
              <Button endIcon={<KeyboardArrowDown />}>
                <img src={crossdown} />
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
              <Button>activities</Button>
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
            width: "800px",
            height: "120px",
            marginX: "auto",
            marginTop: "15px",
            borderRadius: "25px",
          }}
        >
          <Grid container gap={"25%"}>
            <Grid item>umar</Grid>
            <Grid item>umar</Grid>
            <Grid item>umar</Grid>
            <Grid item>umar</Grid>
          </Grid>
        </Box>
        {/* request and appointment section */}
        <Box>
          <Grid container gap={3} marginX="120px" marginTop="20px">
            <Grid item flex={1}>
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
            <Grid item flex={1}>
              <Box
                sx={{
                  backgroundColor: "#eb9d9d",
                  height: "120px",
                  borderRadius: "20px",
                }}
              >
                shakoor
              </Box>
            </Grid>
          </Grid>
        </Box>
        {/* Payment activities products */}
        <Box>
          <Grid container gap={3} marginX="120px" marginTop="20px">
            <Grid item flex={1}>
              <Box
                sx={{
                  backgroundColor: "#6099ce",
                  height: "170px",
                  borderRadius: "20px",
                }}
              >
                Payments
              </Box>
            </Grid>
            <Grid item flex={1}>
              <Box
                sx={{
                  backgroundColor: "#6099ce",
                  height: "190px",
                  borderRadius: "20px",
                }}
              >
                activities
              </Box>
            </Grid>
            <Grid item flex={1}>
              <Box
                sx={{
                  backgroundColor: "#6099ce",
                  height: "190px",
                  borderRadius: "20px",
                }}
              >
                Products
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Dashboard;
