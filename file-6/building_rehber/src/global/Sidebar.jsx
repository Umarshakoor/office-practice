import {
  Box,
  Typography,
  List,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  IconButton,
  useMediaQuery,
  ListItem,
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
  KeyboardArrowRight,
  MenuOpenOutlined,
  NoteAltOutlined,
  PermIdentityOutlined,
  PersonOutlineOutlined,
} from "@mui/icons-material";
import { StateContext } from "../state/AppState";
import { Link } from "react-router-dom";

function Sidebar() {
  const isSmallScreen = useMediaQuery("(max-width: 900px");

  const { isCollapsed, setIsCollapsed } = useContext(StateContext);
  console.log("sidebar...", isCollapsed);
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  if (isSmallScreen && !isCollapsed) {
    setIsCollapsed(true);
  }
  const { isSidebarOpen, toggleSidebar } = useContexts(StateContext);

  const menuItems = [
    { text: "Home", icon: <HomeIcon />, path: "/" },
    { text: "Users", icon: <PeopleIcon />, path: "/users" },
  ];
  return (
    <>
      {isCollapsed && (
        <Box
          sx={{
            height: "100vh",
            bgcolor: "#d9d9d9",
            overflowY: "auto !important",
          }}
        >
          <Grid container>
            <Grid
              container
              sx={{
                paddingBottom: "50px",
                paddingTop: "50px",
                justifyContent: "center",
                alignItems: "baseline",
              }}
              overflow="scroll"
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
              <IconButton onClick={() => setIsCollapsed(isCollapsed)}>
                <KeyboardArrowRight />
              </IconButton>
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
          </Grid>
        </Box>
      ) ? (
        <List sx={{ width: "0px" }}>
          <ListItem
            sx={{
              paddingLeft: "0px",
              paddingRight: "0pc",
              paddingTop: "12px",
              paddingBottom: "0px",
            }}
          >
            <ListItemIcon>
              <IconButton
                sx={{ color: "white" }}
                onClick={() => setIsCollapsed(!isCollapsed)}
              >
                <MenuOpenOutlined />
              </IconButton>
            </ListItemIcon>
          </ListItem>
        </List>
      ) : (
        <Box>
          <Grid
            container
            sx={{
              bgcolor: "#d9d9d9",
              width: "250px",
              justifyContent: "center",
            }}
          >
            <Grid
              container
              gap={1}
              sx={{
                py: "50px",
                justifyContent: "center",
                alignItems: "baseline",
              }}
            >
              <Grid item>
                <Box sx={{ display: "flex" }}>
                  <img src={RehberLogo} height="35px" />
                </Box>
              </Grid>
              <Grid item>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    sx={{
                      fontFamily: "poppins",
                      fontWeight: "600",
                      fontSize: "14px",
                    }}
                  >
                    Building Rehber
                  </Typography>
                  <IconButton
                    sx={{ p: 0 }}
                    onClick={() => setIsCollapsed(!isCollapsed)}
                  >
                    <KeyboardArrowRight fontSize="large" />
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
            <Grid
              container
              sx={{
                flexDirection: "column",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <List disablePadding>
                <ListItemButton
                  components={Link}
                  to={"/dashboard"}
                  sx={{
                    transition: "none",
                    height: "45px",
                    "&.MuiButtonBase-root-MuiListItemButton-root": {
                      transition: "none",
                    },
                    "&.Mui-selected": {
                      backgroundColor: "#1A548A",
                      borderRadius: "16px",
                      color: "white",
                      ":hover": {
                        backgroundColor: "#1A548A",
                        color: "white",
                        borderRadius: "16px",
                      },
                    },
                  }}
                  selected={selectedIndex === 1}
                  onClick={(event) => handleListItemClick(event, 1)}
                >
                  <HomeOutlined />

                  <ListItemText
                    sx={{
                      marginLeft: "20px",
                      fontWeight: "400",
                      fontSize: "16px",
                    }}
                    primary="Dashboard"
                  />
                </ListItemButton>

                <ListItemButton
                  sx={{
                    transition: "none",
                    height: "45px",
                    "&.Mui-selected": {
                      backgroundColor: "#1A548A",
                      borderRadius: "16px",
                      color: "white",
                      ":hover": {
                        backgroundColor: "#1A548A",
                        color: "white",
                        borderRadius: "16px",
                      },
                    },
                  }}
                  selected={selectedIndex === 2}
                  onClick={(event) => handleListItemClick(event, 2)}
                >
                  <PersonOutlineOutlined />

                  <ListItemText
                    sx={{
                      marginLeft: "20px",
                      fontWeight: "400",
                      fontSize: "16px",
                    }}
                    primary="Admin Profile"
                  />
                </ListItemButton>
                <ListItemButton
                  sx={{
                    transition: "none",
                    height: "45px",
                    "&.MuiButtonBase-root-MuiListItemButton-root": {
                      transition: "none",
                    },
                    "&.Mui-selected": {
                      backgroundColor: "#1A548A",
                      borderRadius: "16px",
                      color: "white",
                      ":hover": {
                        backgroundColor: "#1A548A",
                        color: "white",
                        borderRadius: "16px",
                      },
                    },
                  }}
                  selected={selectedIndex === 3}
                  onClick={(event) => handleListItemClick(event, 3)}
                >
                  <CalendarMonthOutlined />

                  <ListItemText
                    sx={{
                      marginLeft: "20px",
                      fontWeight: "400",
                      fontSize: "16px",
                    }}
                    primary="Appointments"
                  />
                </ListItemButton>
                <ListItemButton
                  sx={{
                    transition: "none",
                    height: "45px",
                    "&.MuiButtonBase-root-MuiListItemButton-root": {
                      transition: "none",
                    },
                    "&.Mui-selected": {
                      backgroundColor: "#1A548A",
                      borderRadius: "16px",
                      color: "white",
                      ":hover": {
                        backgroundColor: "#1A548A",
                        color: "white",
                        borderRadius: "16px",
                      },
                    },
                  }}
                  selected={selectedIndex === 4}
                  onClick={(event) => handleListItemClick(event, 4)}
                >
                  <NoteAltOutlined />

                  <ListItemText
                    sx={{
                      marginLeft: "20px",
                      fontWeight: "400",
                      fontSize: "16px",
                    }}
                    primary="Request"
                  />
                </ListItemButton>
                <ListItemButton
                  sx={{
                    transition: "none",
                    height: "45px",
                    "&.MuiButtonBase-root-MuiListItemButton-root": {
                      transition: "none",
                    },
                    "&.Mui-selected": {
                      backgroundColor: "#1A548A",
                      borderRadius: "16px",
                      color: "white",
                      ":hover": {
                        backgroundColor: "#1A548A",
                        color: "white",
                        borderRadius: "16px",
                      },
                    },
                  }}
                  selected={selectedIndex === 5}
                  onClick={(event) => handleListItemClick(event, 5)}
                >
                  <EngineeringOutlined />

                  <ListItemText
                    sx={{
                      marginLeft: "20px",
                      fontWeight: "400",
                      fontSize: "16px",
                    }}
                    primary="Builders"
                  />
                </ListItemButton>
                <ListItemButton
                  sx={{
                    transition: "none",
                    height: "45px",
                    "&.MuiButtonBase-root-MuiListItemButton-root": {
                      transition: "none",
                    },
                    "&.Mui-selected": {
                      backgroundColor: "#1A548A",
                      borderRadius: "16px",
                      color: "white",
                      ":hover": {
                        backgroundColor: "#1A548A",
                        color: "white",
                        borderRadius: "16px",
                      },
                    },
                  }}
                  selected={selectedIndex === 6}
                  onClick={(event) => handleListItemClick(event, 6)}
                >
                  <PermIdentityOutlined />

                  <ListItemText
                    sx={{
                      marginLeft: "20px",
                      fontWeight: "400",
                      fontSize: "16px",
                    }}
                    primary="Customers"
                  />
                </ListItemButton>

                <ListItemButton
                  activeClassName="Mui-selected"
                  sx={{
                    transition: "none",
                    height: "45px",
                    "&.MuiButtonBase-root-MuiListItemButton-root": {
                      transition: "none",
                    },
                    "&.Mui-selected": {
                      backgroundColor: "#1A548A",
                      borderRadius: "16px",
                      color: "white",
                      ":hover": {
                        backgroundColor: "#1A548A",
                        color: "white",
                        borderRadius: "16px",
                      },
                    },
                  }}
                  selected={selectedIndex === 7}
                  onClick={(event) => handleListItemClick(event, 7)}
                >
                  <CallOutlined />

                  <ListItemText
                    sx={{
                      marginLeft: "20px",
                      fontWeight: "400",
                      fontSize: "16px",
                    }}
                    primary="Contact us"
                  />
                </ListItemButton>
                <ListItemButton
                  sx={{
                    transition: "none",
                    height: "45px",
                    "&.MuiButtonBase-root-MuiListItemButton-root": {
                      transition: "none",
                    },
                    "&.Mui-selected": {
                      backgroundColor: "#1A548A",
                      borderRadius: "16px",
                      color: "white",
                      ":hover": {
                        backgroundColor: "#1A548A",
                        color: "white",
                        borderRadius: "16px",
                      },
                    },
                  }}
                  selected={selectedIndex === 8}
                  onClick={(event) => handleListItemClick(event, 8)}
                >
                  <HelpOutline />

                  <ListItemText
                    sx={{
                      marginLeft: "20px",
                      fontWeight: "400",
                      fontSize: "16px",
                    }}
                    primary="Help"
                  />
                </ListItemButton>
              </List>
              {/* <Drawer variant="persistent" anhor="left" open={isSidebarOpen}>
                <div>
                  <IconButton onClick={toggleSidebar}>
                    <MenuI />
                  </IconButton>
                  {location.pathname !== "/" && (
                    <IconButton onClick={handleBack}>
                      <ArrowBackIcon />
                    </IconButton>
                  )}
                  <List>
                    {menuItems.map((item) => (
                      <ListItem
                        button
                        key={item.text}
                        onClick={() => handleNavigation(item.path)}
                        selected={location.pathname === item.path}
                      >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                      </ListItem>
                    ))}
                  </List>
                  
                </div>
              </Drawer> */}
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
}

export default Sidebar;
