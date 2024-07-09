import { Notifications, Search, Textsms } from "@mui/icons-material";
import {
  Box,
  Typography,
  IconButton,
  InputBase,
  Badge,
  Avatar,
} from "@mui/material";

import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";

function Topbar() {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      height: "7px",
      width: "7px",
    },
  }));

  return (
    <>
      <Box
        sx={{
          borderRadius: "0px 0px 40px 0px",
          backgroundColor: "#1A548A",
          height: "110px",
        }}
      >
        <Grid container>
          <Grid item marginLeft="37px" marginY="15px">
            <Typography
              sx={{ color: "white", fontSize: "24px", fontWeight: "600" }}
            >
              Dashboard
            </Typography>
          </Grid>
        </Grid>
        <Grid container sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <Box
              sx={{
                display: "flex",
                marginLeft: "37px",
                backgroundColor: "white",
                alignItems: "center",
                height: "30px",
                borderRadius: "45px",
              }}
            >
              <InputBase
                sx={{ paddingLeft: "20px", fontSize: "15px", width: "180px" }}
                placeholder="Search"
              />
              <Search sx={{ fontSize: "medium", marginRight: "20px" }} />
            </Box>
          </Grid>
          <Grid
            item
            sx={{ display: "flex", alignItems: "center", marginRight: "5px" }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "20px",
                marginRight: "20px",
                alignItems: "center",
              }}
            >
              <Notifications sx={{ color: "white" }} fontSize="small" />
              <Textsms sx={{ color: "white" }} fontSize="small" />
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
                sx={{ fontSize: "9", height: "10", minWidth: "10" }}
              >
                <Avatar
                  sx={{ fontSize: "medium", height: "26px", width: "26px" }}
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                />
              </StyledBadge>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Topbar;
