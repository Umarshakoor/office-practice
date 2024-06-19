import { AppBar, Toolbar, Typography, IconButton, Button } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";
// import instaLogo from "../assets/insta-logo.png";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          style={{ textDecoration: "none", color: "inherit", flexGrow: 1 }}
        >
          <img
            src={
              "https://www.un.org/sites/un2.un.org/files/2021/09/instagram-logo.png"
            }
            alt="Instagram"
            style={{ height: "2rem", marginRight: "0.5rem" }}
          />
          Instagram Clone
        </Typography>
        <Button component={Link} to="/profile" color="inherit">
          Profile
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
