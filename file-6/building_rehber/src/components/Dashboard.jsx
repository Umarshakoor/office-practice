import {
  AttachMoney,
  EditNote,
  HomeOutlined,
  InsertInvitation,
  KeyboardArrowDown,
  Moving,
  Timeline,
} from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import crossdown from "../assets/crossdown.svg";
import arrowup from "../assets/dashboardarrowup.svg";
import dollor from "../assets/greendollor.svg";
import pulse from "../assets/pulse.svg";
import vector from "../assets/Vector.svg";
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
          height: {
            xs: "auto",
            sm: "auto",
            md: "auto",
            lg: "40px",
            xl: "40px",
          },
          width: "95%",
          marginX: "auto",
          marginTop: "25px",
          borderRadius: "10px",
          padding: { xs: "10px", sm: "2px" },
        }}
      >
        <Grid container justifyContent="space-evenly">
          <Grid item xs={6} sm={3} md={3} lg={1} xl={1}>
            <Button startIcon={<HomeOutlined />}>Home</Button>
          </Grid>
          <Grid item xs={6} sm={3} md={3} lg={1} xl={1}>
            <Button endIcon={<KeyboardArrowDown />}>
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
          <Grid item xs={6} sm={3} md={3} lg={1} xl={1}>
            <Button startIcon={<Moving />}>
              Projects
              {<KeyboardArrowDown sx={{ marginLeft: "0px" }} />}
            </Button>
          </Grid>
          <Grid item xs={6} sm={3} md={3} lg={1} xl={1}>
            <Button startIcon={<EditNote />}>Requests</Button>
          </Grid>
          <Grid item xs={6} sm={3} md={3} lg={1} xl={1}>
            <Button startIcon={<Timeline />}>Activities</Button>
          </Grid>
          <Grid item xs={6} sm={3} md={3} lg={1} xl={1}>
            <Button
              startIcon={<InsertInvitation />}
              endIcon={<KeyboardArrowDown sx={{ marginLeft: "0px" }} />}
            >
              Material
            </Button>
          </Grid>
          <Grid item xs={6} sm={3} md={3} lg={1} xl={1}>
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
        marginX={{ xs: "5%", sm: "5%", md: "5%", lg: "5%", xl: "5%" }}
        sx={{
          backgroundColor: "white",
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          marginTop: "10px",
          borderRadius: "25px",
        }}
      >
        <Grid container sx={{ height: { xs: "240px", md: "120px" } }}>
          <Grid item xs={6} md={3} lg={3} xl={3} p="20px">
            <Box height="100%" sx={{ marginLeft: "5px" }}>
              <Box sx={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                <img src={arrowup} height="18px" />
                <Typography
                  sx={{
                    fontFamily: "poppins",
                    color: "rgba(85, 82, 82, 1)",
                    fontSize: "12px",
                    fontWeight: "500",
                    lineHeight: "5px",
                  }}
                >
                  Projects
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "750",
                    color: "rgba(34, 19, 58, 1)",
                    lineHeight: "35px",
                  }}
                >
                  405
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "10px",
                    fontWeight: "500",
                    color: "rgba(111, 106, 106, 1)",
                    lineHeight: "0px",
                  }}
                >
                  <span
                    style={{
                      color: "#3677b3",
                      fontSize: "10px",
                      fontWeight: "700",
                    }}
                  >
                    5{" "}
                  </span>
                  Projects since Last
                </Typography>
                <Typography
                  sx={{
                    fontSize: "10px",
                    fontWeight: "500",
                    color: "rgba(111, 106, 106, 1)",
                    lineHeight: "18px",
                  }}
                >
                  month
                </Typography>
                <Typography
                  sx={{
                    fontSize: "10px",
                    lineHeight: "10px",
                  }}
                >
                  <span
                    style={{
                      fontWeight: "600",
                      color: "#3677b3",
                    }}
                  >
                    Create
                  </span>
                  <span
                    style={{
                      fontWeight: "700",
                    }}
                  >
                    {" "}
                    |
                  </span>
                  <span
                    style={{
                      fontWeight: "600",
                    }}
                  >
                    {" "}
                    View
                  </span>
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={6} md={3} lg={3} xl={3} p="10px">
            <Box height="100%" sx={{ padding: "10px", marginLeft: "5px" }}>
              <Box sx={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                <img src={dollor} height="16px" />
                <Typography
                  sx={{
                    fontFamily: "poppins",
                    color: "rgba(85, 82, 82, 1)",
                    fontSize: "10px",
                    fontWeight: "500",
                    lineHeight: "5px",
                  }}
                >
                  Payments
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "750",
                    color: "rgba(34, 19, 58, 1)",
                    lineHeight: "35px",
                  }}
                >
                  $65,456
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "10px",
                    fontWeight: "500",
                    color: "rgba(111, 106, 106, 1)",
                    lineHeight: "0px",
                  }}
                >
                  <span
                    style={{
                      color: "#6dd064",
                      fontSize: "10px",
                      fontWeight: "700",
                    }}
                  >
                    $3000{" "}
                  </span>
                  Payment since Last
                </Typography>
                <Typography
                  sx={{
                    fontSize: "10px",
                    fontWeight: "500",
                    color: "rgba(111, 106, 106, 1)",
                    lineHeight: "18px",
                  }}
                >
                  month
                </Typography>
                <Typography
                  sx={{
                    fontSize: "10px",
                    lineHeight: "10px",
                  }}
                >
                  <span
                    style={{
                      fontWeight: "600",
                      color: "#a2e09c",
                    }}
                  >
                    Add
                  </span>
                  <span
                    style={{
                      fontWeight: "700",
                    }}
                  >
                    {" "}
                    |
                  </span>
                  <span
                    style={{
                      fontWeight: "600",
                    }}
                  >
                    {" "}
                    View
                  </span>
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={6} md={3} lg={3} xl={3} p="10px">
            <Box height="100%" sx={{ padding: "10px", marginLeft: "5px" }}>
              <Box sx={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                <img src={pulse} height="16px" />
                <Typography
                  sx={{
                    fontFamily: "poppins",
                    color: "rgba(85, 82, 82, 1)",
                    fontSize: "10px",
                    fontWeight: "500",
                    lineHeight: "5px",
                  }}
                >
                  Projects
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "750",
                    color: "rgba(34, 19, 58, 1)",
                    lineHeight: "35px",
                  }}
                >
                  434
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "10px",
                    fontWeight: "500",
                    color: "rgba(111, 106, 106, 1)",
                    lineHeight: "0px",
                  }}
                >
                  <span
                    style={{
                      color: "#eea26b",
                      fontSize: "10px",
                      fontWeight: "600",
                    }}
                  >
                    56{" "}
                  </span>
                  Activities since Last
                </Typography>
                <Typography
                  sx={{
                    fontSize: "10px",
                    fontWeight: "500",
                    color: "rgba(111, 106, 106, 1)",
                    lineHeight: "18px",
                  }}
                >
                  month
                </Typography>
                <Typography
                  sx={{
                    fontSize: "10px",
                    lineHeight: "10px",
                  }}
                >
                  <span
                    style={{
                      fontWeight: "600",
                      color: "#eea26b",
                    }}
                  >
                    {" "}
                    View
                  </span>
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={6} md={3} lg={3} xl={3} p="10px">
            <Box height="100%" sx={{ padding: "10px", marginLeft: "5px" }}>
              <Box sx={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                <img src={vector} height="18px" />
                <Typography
                  sx={{
                    fontFamily: "poppins",
                    color: "rgba(85, 82, 82, 1)",
                    fontSize: "12px",
                    fontWeight: "500",
                    lineHeight: "5px",
                  }}
                >
                  Producrs
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "rgba(34, 19, 58, 1)",
                    lineHeight: "35px",
                  }}
                >
                  36
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "10px",
                    fontWeight: "500",
                    color: "rgba(111, 106, 106, 1)",
                    lineHeight: "0px",
                  }}
                >
                  <span
                    style={{
                      color: "#b23fe7",
                      fontSize: "10px",
                      fontWeight: "600",
                    }}
                  >
                    70%{" "}
                  </span>
                  Products Sold
                </Typography>
                <Typography
                  sx={{
                    fontSize: "10px",
                    fontWeight: "500",
                    color: "rgba(111, 106, 106, 1)",
                    lineHeight: "18px",
                  }}
                >
                  since Last month
                </Typography>
                <Typography
                  sx={{
                    fontSize: "10px",
                    lineHeight: "10px",
                  }}
                >
                  <span
                    style={{
                      fontWeight: "600",
                      color: "#b23fe7",
                    }}
                  >
                    Purchase
                  </span>
                  <span
                    style={{
                      fontWeight: "700",
                    }}
                  >
                    {" "}
                    |
                  </span>
                  <span
                    style={{
                      fontWeight: "600",
                    }}
                  >
                    {" "}
                    View
                  </span>
                </Typography>
              </Box>
            </Box>
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
