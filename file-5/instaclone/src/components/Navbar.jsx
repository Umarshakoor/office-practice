import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Grid,
  Box,
} from "@mui/material";
import {
  Search as SearchIcon,
  Home as HomeIcon,
  AddBox as AddBoxIcon,
  FavoriteBorder as FavoriteBorderIcon,
  Person as PersonIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item xs={6} sm={3}>
              <Typography
                variant="h6"
                component={Link}
                to="/"
                sx={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <img
                  src={
                    "https://www.un.org/sites/un2.un.org/files/2021/09/instagram-logo.png"
                  }
                  alt="Instagram"
                  style={{
                    height: "2rem",
                    /* marginRight: "0.5rem",
                    marginTop: "0.8rem", */
                  }}
                />
                Instagram
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <SearchIcon />
                <InputBase
                  placeholder="Search..."
                  sx={{ marginLeft: "1", width: "100%" }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <IconButton component={Link} to="/">
                  <HomeIcon />
                </IconButton>
                <IconButton component={Link} to="/add">
                  <AddBoxIcon />
                </IconButton>
                <IconButton>
                  <FavoriteBorderIcon />
                </IconButton>
                <IconButton component={Link} to="/profile">
                  <PersonIcon />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Navbar;
