import { Notifications, Search, Textsms } from "@mui/icons-material";
import {
  Box,
  Typography,
  IconButton,
  InputBase,
  Badge,
  Avatar,
  Grid,
} from "@mui/material";
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
    <Box
      sx={{
        borderRadius: "0px 0px 40px 0px",
        backgroundColor: "#1A548A",
        height: { xs: "auto", sm: "110px" },
        padding: { xs: "10px", sm: "0" },
      }}
    >
      <Grid container alignItems="center">
        <Grid item xs={12} sm="auto" marginLeft="37px" marginY="15px">
          <Typography
            sx={{
              color: "white",
              fontSize: { xs: "20px", sm: "24px" },
              fontWeight: "600",
            }}
          >
            Dashboard
          </Typography>
        </Grid>
        <Grid item xs={12} sm>
          <Box
            sx={{
              display: "flex",
              marginLeft: { xs: "0", sm: "37px" },
              backgroundColor: "white",
              alignItems: "center",
              height: "30px",
              borderRadius: "45px",
              marginTop: { xs: "10px", sm: "0" },
              justifyContent: "center",
            }}
          >
            <InputBase
              sx={{
                paddingLeft: "20px",
                fontSize: "15px",
                width: { xs: "100%", sm: "180px" },
              }}
              placeholder="Search"
            />
            <Search sx={{ fontSize: "medium", marginRight: "20px" }} />
          </Box>
        </Grid>
        <Grid item xs={12} sm="auto">
          <Box
            sx={{
              display: "flex",
              gap: "20px",
              marginRight: "20px",
              alignItems: "center",
              justifyContent: { xs: "center", sm: "flex-end" },
            }}
          >
            <IconButton>
              <Notifications sx={{ color: "white" }} fontSize="small" />
            </IconButton>
            <IconButton>
              <Textsms sx={{ color: "white" }} fontSize="small" />
            </IconButton>
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
  );
}

export default Topbar;
