import {
  CalendarMonthOutlined,
  CallOutlined,
  EngineeringOutlined,
  HelpOutline,
  HomeOutlined,
  KeyboardArrowRight,
  Menu,
  NoteAltOutlined,
  PermIdentityOutlined,
  PersonOutlineOutlined,
} from "@mui/icons-material";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
// import Grid from "@mui/material/Unstable_Grid2";
import RehberLogo from "../assets/RehberLogo.png";

import { useState } from "react";
import { Link } from "react-router-dom";

function NewSidebar() {
  const [open, setOpen] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const menuItem = [
    { text: "Dashboard", icon: <HomeOutlined /> },
    { text: "Admin Profile", icon: <PersonOutlineOutlined /> },
    { text: "Appointments", icon: <CalendarMonthOutlined /> },
    { text: "Request", icon: <NoteAltOutlined /> },
    { text: "Builders", icon: <EngineeringOutlined /> },
    { text: "Customers", icon: <PermIdentityOutlined /> },
    { text: "Contact us", icon: <CallOutlined /> },
    { text: "Help", icon: <HelpOutline /> },
  ];

  //   const newname = {menuItem.text}

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        sx={{
          width: open ? 280 : 60,
          "& .MuiDrawer-paper": {
            width: open ? 280 : 60,
            boxSizing: "border-box",
            transition: "width 0.3s",
          },
        }}
      >
        <IconButton
          onClick={handleToggle}
          sx={{ py: "15px", ":hover": "none" }}
        >
          {open ? <KeyboardArrowRight /> : <Menu />}
        </IconButton>
        <Box
          sx={{
            // display: open ? "flex" : "block",
            display: "flex",
            gap: open ? "6px" : "none",
            paddingX: "5px",
            alignItems: "baseline",
            justifyContent: open ? "center" : "none",
          }}
        >
          <img src={RehberLogo} height="35px" />
          <Typography
            sx={{
              fontFamily: "poppins",
              fontWeight: "700",
              fontSize: "16px",
              opacity: open ? 1 : 0,
            }}
          >
            Building Rehber
          </Typography>
        </Box>
        <List disablePadding>
          {menuItem.map((item, index) => (
            <ListItemButton
              component={Link}
              to={item.text}
              key={index}
              selected={selectedIndex === index}
              onClick={(event) => handleListItemClick(event, index)}
              sx={{
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}

export default NewSidebar;
