import {
  AttachMoney,
  EditNote,
  HomeOutlined,
  InsertInvitation,
  KeyboardArrowDown,
  Moving,
  Timeline,
} from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import crossdown from "../assets/crossdown.svg";
import Grid from "@mui/material/Unstable_Grid2";

function Dashboard() {
  return (
    <Box
      sx={{
        padding: { xs: "10px", sm: "2px" },
      }}
    >
      {/* Dashboard Top navbar */}
      <Box
        sx={{
          backgroundColor: "#fbfbfb",
          height: "auto",
          width: "95%",
          marginX: "auto",
          marginTop: "25px",
          borderRadius: "10px",
          padding: { xs: "10px", sm: "2px" },
        }}
      >
        <Grid container justifyContent="space-around">
          <Grid item>
            <Button
              sx={{
                "&.MuiButtonBase-root-MuiButton-root": {
                  textTransform: "none",
                },
              }}
              startIcon={<HomeOutlined />}
            >
              Home
            </Button>
          </Grid>
          <Grid item>
            <Button
              sx={{ "& .MuiButton-startIcon": { marginLeft: "0px" } }}
              endIcon={<KeyboardArrowDown sx={{ marginLeft: "0px" }} />}
            >
              <img
                src={crossdown}
                alt="crossdown"
                style={{
                  marginRight: "5px",
                  filter:
                    "invert(12%) sepia(37%) saturate(2232%) hue-rotate(183deg) brightness(101%) contrast(112%)",
                }}
              />
              Deadline
            </Button>
          </Grid>
          <Grid item>
            <Button startIcon={<Moving />}>
              Projects endIcon
              {<KeyboardArrowDown sx={{ marginLeft: "0px" }} />}
            </Button>
          </Grid>
          <Grid item>
            <Button startIcon={<EditNote />}>Requests</Button>
          </Grid>
          <Grid item>
            <Button startIcon={<Timeline />}>Activities</Button>
          </Grid>
          <Grid item>
            <Button
              startIcon={<InsertInvitation />}
              endIcon={<KeyboardArrowDown sx={{ marginLeft: "0px" }} />}
            >
              Material
            </Button>
          </Grid>
          <Grid item>
            <Button
              startIcon={<AttachMoney />}
              endIcon={<KeyboardArrowDown sx={{ marginRight: "0px" }} />}
            >
              Payment
            </Button>
          </Grid>
        </Grid>
      </Box>
      {/* info board */}
      <Box
        marginX={{ xs: "5%", sm: "5%", md: "10%", lg: "10%", xl: "5%" }}
        sx={{
          backgroundColor: "white",
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          marginTop: "10px",
          borderRadius: "25px",
        }}
      >
        <Grid container sx={{ height: "120px" }}>
          <Grid item flex={1} p="10px">
            <Box border="1px solid red" height="100%">
              Umar
            </Box>
          </Grid>
          <Grid item flex={1}>
            <Box>Umar</Box>
          </Grid>
          <Grid item flex={1}>
            <Box>Umar</Box>
          </Grid>
          <Grid item flex={1}>
            <Box>Umar</Box>
          </Grid>
        </Grid>
      </Box>
      {/* request and appointment section */}
      <Box>
        <Grid
          container
          spacing={3}
          marginX={{ xs: "5%", sm: "5%", md: "10%", lg: "10%", xl: "5%" }}
          marginTop="1px"
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
              shakoor
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* appointments */}
      <Box>
        <Grid
          container
          spacing={3}
          marginX={{ xs: "5%", sm: "5%", md: "10%", lg: "10%", xl: "5%" }}
          marginTop="1px"
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
