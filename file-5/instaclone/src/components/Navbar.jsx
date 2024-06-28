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
  Menu as MenuIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { StateContext } from "../context/StateContext";

const Navbar = () => {
  const { query, setQuery } = useContext(StateContext);

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.value;
    setQuery(query);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar
          sx={(theme) => ({
            [theme.breakpoints.up("xs")]: { justifyContent: "center" },
            [theme.breakpoints.up("sm")]: { justifyContent: "left" },
            bgcolor: "white",
          })}
        >
          <Grid container spacing={1} alignItems="center">
            <Grid item xs={6} sm={3}>
              <MenuIcon sx={{ display: { xs: "block", sm: "none" } }} />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={
                    "https://www.un.org/sites/un2.un.org/files/2021/09/instagram-logo.png"
                  }
                  alt="Instagram"
                  style={{
                    height: "30px",
                    marginRight: "0.5rem",
                  }}
                />
                <Typography
                  variant="h6"
                  component={Link}
                  to="/"
                  sx={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Instagram
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={6}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: "rgba(0, 0, 0, 0.1)",
                  borderRadius: "10px",
                  boxShadow: "0 0 5px #ef6233",
                }}
              >
                <SearchIcon />
                <InputBase
                  value={query}
                  placeholder="Search..."
                  onChange={handleSearch}
                  sx={{
                    marginLeft: "1",
                    marginRight: "1",
                    width: "100%",
                  }}
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
