import { useContext } from "react";
import {
  AccessTime,
  AttachMoney,
  CalendarMonthOutlined,
  EditNote,
  HomeOutlined,
  InsertInvitation,
  KeyboardArrowDown,
  KeyboardArrowRight,
  Moving,
  NoteAltOutlined,
  ReportGmailerrorred,
  Timeline,
} from "@mui/icons-material";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from "@mui/material";
import crossdown from "../assets/crossdown.svg";
import arrowup from "../assets/dashboardarrowup.svg";
import dollor from "../assets/greendollor.svg";
import pulse from "../assets/pulse.svg";
import vector from "../assets/Vector.svg";
import Grid from "@mui/material/Unstable_Grid2";
import { StateContext } from "../state/AppState";

function Dashboard() {
  const { theme } = useContext(StateContext);

  // Dynamic colors based on the theme
  const bgc = theme === "dark" ? "#2E2E2E" : "#fbfbfb";
  const cardBackgroundColor = theme === "dark" ? "#424242" : "white";
  const textColor = theme === "dark" ? "#FFFFFF" : "#000000";
  const secondaryTextColor = theme === "dark" ? "#B0B0B0" : "#757575";
  const highlightColor = theme === "dark" ? "#64FFDA" : "#3677b3"; // Dark green for dark theme
  return (
    <Box
      sx={{
        padding: { xs: "10px", sm: "2px" },
      }}
    >
      {/* Dashboard Top navbar */}
      <Box
        sx={{
          backgroundColor: bgc,
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
          overflow: "hidden",
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
          backgroundColor: bgc,
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          marginTop: "10px",
          borderRadius: "25px",
          overflow: "hidden",
        }}
      >
        <Grid
          container
          sx={{ height: { xs: "auto", sm: "240px", md: "120px" } }}
        >
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
                    lineHeight: "20px",
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
                    lineHeight: "20px",
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
                    lineHeight: "20px",
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
                  Projects since Last month
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
                    lineHeight: "20px",
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
                    lineHeight: "20px",
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
                    lineHeight: "20px",
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
                  Payment since Last Month
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
                    lineHeight: "20px",
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
                    lineHeight: "20px",
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
                    lineHeight: "20px",
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
                  Activities since Last Month
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
                    lineHeight: "20px",
                  }}
                >
                  Products
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "rgba(34, 19, 58, 1)",
                    lineHeight: "20px",
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
                    lineHeight: "20px",
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
                    lineHeight: "10px",
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
        <Grid container spacing={3} marginX="5%" marginTop="1px">
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box
              sx={{
                display: "flex",
                backgroundColor: bgc,
                height: "100px",
                width: "100%",
                marginX: "auto",
                borderRadius: "20px",
                alignItems: "center",
                justifyContent: "space-between",
                overflow: "hidden",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Box
                  sx={{
                    backgroundColor: bgc,
                    width: { xs: "65px", sm: "60px", md: "65px", lg: "65px" },
                    height: { xs: "65px", sm: "60px", md: "65px", lg: "65px" },
                    borderRadius: "15px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "18px",
                  }}
                >
                  <NoteAltOutlined
                    fontSize="large"
                    sx={{ color: "primary.main" }}
                  />
                </Box>
                <Box marginTop="20px">
                  <Typography
                    sx={{
                      color: bgc,
                      fontWeight: "500",
                      fontSize: "20px",
                      lineHeight: "20px",
                    }}
                  >
                    request
                  </Typography>
                  <Typography
                    sx={{
                      color: "white",
                      fontWeight: "400",
                      fontSize: "11px",
                    }}
                  >
                    Today<span style={{ color: "#2cb7bd" }}>(4)</span>
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  backgroundColor: cardBackgroundColor,
                  width: "30px",
                  height: "30px",
                  borderRadius: "7px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: { xs: "18px", sm: "18px", md: "19px", lg: "18px" },
                  overflow: "hidden",
                }}
              >
                <KeyboardArrowRight
                  fontSize="small"
                  sx={{ color: "rgba(144, 144, 144, 1)" }}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box
              sx={{
                display: "flex",
                backgroundColor: "#eb9d9d",
                height: "100px",
                width: "100%",
                marginX: "auto",
                borderRadius: "20px",
                alignItems: "center",
                justifyContent: "space-between",
                overflow: "hidden",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Box
                  sx={{
                    backgroundColor: "#f2f2f2",
                    width: { xs: "65px", sm: "60px", md: "65px", lg: "65px" },
                    height: { xs: "65px", sm: "60px", md: "65px", lg: "65px" },
                    borderRadius: "15px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "18px",
                  }}
                >
                  <CalendarMonthOutlined
                    fontSize="large"
                    sx={{ color: "primary.main" }}
                  />
                </Box>
                <Box marginTop="20px">
                  <Typography
                    sx={{
                      color: "white",
                      fontWeight: "500",
                      fontSize: "20px",
                      lineHeight: "20px",
                    }}
                  >
                    Appointments
                  </Typography>
                  <Typography
                    sx={{
                      color: "white",
                      fontWeight: "400",
                      fontSize: "11px",
                    }}
                  >
                    Today<span style={{ color: "#da5757" }}>(4)</span>
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  backgroundColor: "#f2f2f2",
                  width: "30px",
                  height: "30px",
                  borderRadius: "7px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: { xs: "18px", sm: "18px", md: "19px", lg: "18px" },
                  overflow: "hidden",
                }}
              >
                <KeyboardArrowRight
                  fontSize="small"
                  sx={{ color: "rgba(144, 144, 144, 1)" }}
                />
              </Box>
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
          justifyContent="center"
        >
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                backgroundColor: "white",
                height: "120px",
                borderRadius: "20px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "7px",
                  p: "11px",
                  alignItems: "center",
                  ml: "9px",
                  overflow: "hidden",
                }}
              >
                <Box sx={{ display: "flex" }}>
                  <img src={dollor} height="14px" />
                </Box>
                <Box sx={{ display: "flex" }}>
                  <Typography sx={{ fontWeight: "600", fontSize: "14px" }}>
                    Payments
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  backgroundColor: "#6099ce",
                  width: "auto",
                  height: { xs: "80px", sm: "80px", md: "80px", lg: "80px" },
                  borderRadius: "20px",
                  overflow: "hidden",
                }}
              >
                <Box>
                  <List>
                    <ListItem
                      sx={{
                        "&.MuiListItem-root": {
                          paddingX: "0px",
                          paddingBottom: "0px",
                          flexDirection: "column",
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{ color: "white", gap: "5px", fontSize: "12px" }}
                      >
                        <AccessTime fontSize="small" /> Payment Overdue (2)
                      </ListItemIcon>
                      <ListItemIcon
                        sx={{
                          color: "white",
                          gap: "5px",
                          fontSize: "12px",
                          ml: "13px",
                        }}
                      >
                        <ReportGmailerrorred fontSize="small" /> Upcoming
                        Payment (8)
                      </ListItemIcon>
                    </ListItem>
                  </List>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                backgroundColor: "white",
                height: "120px",
                borderRadius: "20px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "7px",
                  p: "11px",
                  alignItems: "center",
                  ml: "9px",
                  overflow: "hidden",
                }}
              >
                <Box sx={{ display: "flex" }}>
                  <img src={pulse} height="14px" />
                </Box>
                <Box sx={{ display: "flex" }}>
                  <Typography sx={{ fontWeight: "600", fontSize: "14px" }}>
                    Activities
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  backgroundColor: "#6099ce",
                  width: "auto",
                  height: "80px",
                  borderRadius: "20px",
                  overflow: "hidden",
                }}
              >
                <Box>
                  <List>
                    <ListItem
                      sx={{
                        "&.MuiListItem-root": {
                          paddingX: "0px",
                          paddingBottom: "0px",
                          flexDirection: "column",
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{ color: "white", gap: "5px", fontSize: "12px" }}
                      >
                        <AccessTime fontSize="small" /> Payment Overdue (2)
                      </ListItemIcon>
                      <ListItemIcon
                        sx={{
                          color: "white",
                          gap: "5px",
                          fontSize: "12px",
                          ml: "13px",
                        }}
                      >
                        <ReportGmailerrorred fontSize="small" /> Upcoming
                        Payment (8)
                      </ListItemIcon>
                    </ListItem>
                  </List>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                backgroundColor: "white",
                height: "120px",
                borderRadius: "20px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "7px",
                  p: "11px",
                  alignItems: "center",
                  ml: "9px",
                  overflow: "hidden",
                }}
              >
                <Box sx={{ display: "flex" }}>
                  <img src={vector} height="14px" />
                </Box>
                <Box sx={{ display: "flex" }}>
                  <Typography sx={{ fontWeight: "600", fontSize: "14px" }}>
                    Products
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  backgroundColor: "#6099ce",
                  width: "auto",
                  height: "80px",
                  borderRadius: "20px",
                  overflow: "hidden",
                }}
              >
                <Box>
                  <List>
                    <ListItem
                      sx={{
                        "&.MuiListItem-root": {
                          paddingX: "0px",
                          paddingBottom: "0px",
                          flexDirection: "column",
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{ color: "white", gap: "5px", fontSize: "12px" }}
                      >
                        <AccessTime fontSize="small" /> Payment Overdue (2)
                      </ListItemIcon>
                      <ListItemIcon
                        sx={{
                          color: "white",
                          gap: "5px",
                          fontSize: "12px",
                          ml: "13px",
                        }}
                      >
                        <ReportGmailerrorred fontSize="small" /> Upcoming
                        Payment (8)
                      </ListItemIcon>
                    </ListItem>
                  </List>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Dashboard;
