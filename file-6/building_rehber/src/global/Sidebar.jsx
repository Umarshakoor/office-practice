import {
  Box,
  Typography,
  Menu,
  MenuItem,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import React, { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import RehberLogo from "../assets/RehberLogo.png";
import { Link } from "react-router-dom";
import {
  CalendarMonthOutlined,
  CallOutlined,
  DashboardOutlined,
  EngineeringOutlined,
  HelpOutline,
  HomeOutlined,
  MenuOutlined,
  NoteAltOutlined,
  PeopleOutlined,
  PermIdentityOutlined,
  PersonOutlineOutlined,
} from "@mui/icons-material";

/* const Item = ({ title, to, icon, selected, setSelected }) => {
  return (
    <MenuItem
      active={selected === title}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
}; */

function Sidebar() {
  // const [isCollapsed, setIsCollapsed] = useState(false);
  // const [selected, setSelected] = useState("Dashboard");
  return (
    <Box>
      <Grid
        container
        sx={{
          bgcolor: "#EDEDED",
          width: "250px",
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
        gap={1}
        spacing={"2px"}
        sx={{
          bgcolor: "#EDEDED",
          width: "250px",
          height: "100vh",
          paddingX: "10px",
          flexDirection: "column",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        {/* <Grid item>
          <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
            <MenuOutlined />
          </IconButton>
          <Menu>
            <Box>
              <MenuItem
                title="Dashboard"
                to="/"
                icon={<HomeOutlined />}
                selected={selected}
                setSelected={setSelected}
              />

              <Typography variant="h6" sx={{ m: "15px 0 5px 20px" }}>
                Data
              </Typography>
              <MenuItem
                title="Manage Team"
                to="/team"
                icon={<PeopleOutlined />}
                selected={selected}
                setSelected={setSelected}
              />
            </Box>
          </Menu>
        </Grid> */}
        <Grid item>
          <List>
            <Box
              sx={{
                backgroundColor: "#1A548A",
                color: "white",
                borderRadius: "16px",
              }}
            >
              <ListItem>
                <ListItemIcon sx={{ color: "white" }}>
                  <HomeOutlined />
                </ListItemIcon>
                Dashboard
              </ListItem>
            </Box>
            <ListItem>
              <ListItemIcon>
                <PersonOutlineOutlined />
              </ListItemIcon>
              Admin Profile
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CalendarMonthOutlined />
              </ListItemIcon>
              Appointments
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <NoteAltOutlined />
              </ListItemIcon>
              Request
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <EngineeringOutlined />
              </ListItemIcon>
              Builders
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PermIdentityOutlined />
              </ListItemIcon>
              Customers
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CallOutlined />
              </ListItemIcon>
              Contact us
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <HelpOutline />
              </ListItemIcon>
              help
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Sidebar;
