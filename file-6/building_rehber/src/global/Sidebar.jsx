import {
  Box,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useState, useContext } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import RehberLogo from "../assets/RehberLogo.png";
import {
  CalendarMonthOutlined,
  CallOutlined,
  EngineeringOutlined,
  HelpOutline,
  HomeOutlined,
  NoteAltOutlined,
  PermIdentityOutlined,
  PersonOutlineOutlined,
} from "@mui/icons-material";
import { StateContext } from "../state/AppState";
import { NavLink } from "react-router-dom";
// import { styled } from "@mui/material/styles";

function Sidebar() {
  /*   const myListButton = styled(ListItemButton)({
    "&.Mui-selected": {
      backgroundColor: "#1A548A",
      color: "white",
      ":hover": {
        backgroundColor: "#1A548A",
        color: "white",
      },
    },
  }); */

  const { isCollapsed, setIsCollapsed } = useContext(StateContext);
  console.log("sidebar...", isCollapsed);
  const [selected, setSelected] = useState("Dashboard");
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{ height: "100vh", width: "300px", bgcolor: "#EDEDED" }}>
      <Grid
        container
        sx={{
          paddingBottom: "50px",
          paddingTop: "50px",
          justifyContent: "center",
          alignItems: "baseline",
        }}
      >
        <Grid item>
          <Box sx={{ display: "flex", marginRight: "6px" }}>
            <img src={RehberLogo} height="40px" />
          </Box>
        </Grid>
        <Grid item>
          <Box sx={{ display: "flex" }}>
            <Typography
              sx={{
                fontFamily: "poppins",
                fontWeight: "600",
                fontSize: "18px",
              }}
            >
              Building Rehber
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          paddingX: "10px",
          flexDirection: "column",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <Grid item>
          {/* <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
            <MenuOutlined />
          </IconButton> */}
        </Grid>
        <Grid item>
          <List display="flex" flexDirection="column">
            <Box
              sx={{
                display: "flex",
              }}
            >
              <ListItemButton
                sx={{
                  height: "45px",
                  "&.Mui-selected": {
                    backgroundColor: "#1A548A",
                    borderRadius: "16px",
                    color: "white",
                    "&.MuiListItemIcon-root": {
                      color: "white",
                    },
                    "&.MuiSvgIcon-root": {
                      color: "white",
                      backgroundColor: "white",
                    },
                    ":hover": {
                      backgroundColor: "#1A548A",
                      color: "white",
                    },
                  },
                }}
                component={NavLink}
                to="/dasboard"
                selected={selectedIndex === 1}
                onClick={(event) => handleListItemClick(event, 1)}
              >
                <ListItemIcon>
                  <HomeOutlined />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </Box>

            <Box
              sx={{
                display: "flex",
              }}
            >
              <ListItemButton
                sx={{
                  height: "45px",
                  "&.Mui-selected": {
                    backgroundColor: "#1A548A",
                    borderRadius: "16px",
                    color: "white",
                    ":hover": {
                      backgroundColor: "#1A548A",
                      color: "white",
                    },
                  },
                }}
                selected={selectedIndex === 2}
                onClick={(event) => handleListItemClick(event, 2)}
              >
                <ListItemIcon sx={{ minWidth: "0", width: "40px" }}>
                  <PersonOutlineOutlined />
                </ListItemIcon>
                <ListItemText primary="Admin Profile" />
              </ListItemButton>
            </Box>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <ListItemButton
                sx={{
                  height: "45px",
                  "&.Mui-selected": {
                    backgroundColor: "#1A548A",
                    borderRadius: "16px",
                    color: "white",
                    ":hover": {
                      backgroundColor: "#1A548A",
                      color: "white",
                    },
                  },
                }}
                selected={selectedIndex === 3}
                onClick={(event) => handleListItemClick(event, 3)}
              >
                <ListItemIcon>
                  <CalendarMonthOutlined />
                </ListItemIcon>
                <ListItemText primary="Appointments" />
              </ListItemButton>
            </Box>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <ListItemButton
                sx={{
                  height: "45px",
                  "&.Mui-selected": {
                    backgroundColor: "#1A548A",
                    borderRadius: "16px",
                    color: "white",
                    ":hover": {
                      backgroundColor: "#1A548A",
                      color: "white",
                    },
                  },
                }}
                selected={selectedIndex === 4}
                onClick={(event) => handleListItemClick(event, 4)}
              >
                <ListItemIcon>
                  <NoteAltOutlined />
                </ListItemIcon>
                <ListItemText primary="Request" />
              </ListItemButton>
            </Box>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <ListItemButton
                sx={{
                  height: "45px",
                  "&.Mui-selected": {
                    backgroundColor: "#1A548A",
                    borderRadius: "16px",
                    color: "white",
                    ":hover": {
                      backgroundColor: "#1A548A",
                      color: "white",
                    },
                  },
                }}
                selected={selectedIndex === 5}
                onClick={(event) => handleListItemClick(event, 5)}
              >
                <ListItemIcon>
                  <EngineeringOutlined />
                </ListItemIcon>
                <ListItemText primary="Builders" />
              </ListItemButton>
            </Box>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <ListItemButton
                sx={{
                  height: "45px",
                  "&.Mui-selected": {
                    backgroundColor: "#1A548A",
                    borderRadius: "16px",
                    color: "white",
                    ":hover": {
                      backgroundColor: "#1A548A",
                      color: "white",
                    },
                  },
                }}
                selected={selectedIndex === 6}
                onClick={(event) => handleListItemClick(event, 6)}
              >
                <ListItemIcon>
                  <PermIdentityOutlined />
                </ListItemIcon>
                <ListItemText primary="Customers" />
              </ListItemButton>
            </Box>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <ListItemButton
                sx={{
                  height: "45px",
                  "&.Mui-selected": {
                    backgroundColor: "#1A548A",
                    borderRadius: "16px",
                    color: "white",
                    ":hover": {
                      backgroundColor: "#1A548A",
                      color: "white",
                    },
                  },
                }}
                selected={selectedIndex === 7}
                onClick={(event) => handleListItemClick(event, 7)}
              >
                <ListItemIcon>
                  <CallOutlined />
                </ListItemIcon>
                <ListItemText primary="Contact us" />
              </ListItemButton>
            </Box>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <ListItemButton
                sx={{
                  height: "45px",
                  "&.Mui-selected": {
                    backgroundColor: "#1A548A",
                    borderRadius: "16px",
                    color: "white",
                    ":hover": {
                      backgroundColor: "#1A548A",
                      color: "white",
                    },
                  },
                }}
                selected={selectedIndex === 8}
                onClick={(event) => handleListItemClick(event, 8)}
              >
                <ListItemIcon>
                  <HelpOutline />
                </ListItemIcon>
                <ListItemText primary="Help" />
              </ListItemButton>
            </Box>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Sidebar;
