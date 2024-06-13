import { AppBar, Tab, Tabs, Toolbar, Box } from "@mui/material";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
function Navbar() {
  return (
    <Box>
      <AppBar position="relative" sx={{ bgcolor: "#f1f7ff" }} elevation="none">
        <Toolbar>
          <CoronavirusIcon sx={{ color: "blue" }} />
          <Tabs
            variant="contained"
            value={0}
            sx={{ marginLeft: "auto" }}
            indicatorColor="primary"
          >
            <Tab label="Home" />
            <Tab label="Reports" />
            <Tab label="HomCentere" />
            <Tab label="About" />
            <Tab label="Symptoms" />
            <Tab label="Contact" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
