import { Notifications, Search, Textsms } from "@mui/icons-material";
import {
  Box,
  Typography,
  IconButton,
  InputBase,
  Badge,
  Avatar,
  Grid,
  Switch,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { StateContext } from "../state/AppState";
import { useContext, useState } from "react";
import "../index.css";

function Topbar() {
  const { theme, toggleTheme } = useContext(StateContext);

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      height: "7px",
      width: "7px",
    },
  }));

  const [isExtended, setIsExtended] = useState(false); // this is for the search icon

  const extendSearch = () => {
    setIsExtended(!isExtended);
  };

  return (
    <Box
      sx={{
        borderRadius: "0px 0px 40px 0px",
        backgroundColor: "#1A548A",
        height: { xs: "auto", sm: "110px" },
        padding: { xs: "10px", sm: "0" },
      }}
    >
      <Grid container>
        <Grid item xs={12} sm="auto" md="12" marginY="15px">
          <Typography
            sx={{
              color: "white",
              fontSize: { xs: "20px", sm: "24px" },
              fontWeight: "600",
              marginLeft: "37px",
            }}
          >
            Dashboard
          </Typography>
        </Grid>
        <Grid container alignItems={"center"}>
          <Grid item xs={6}>
            <Box
              sx={{
                display: "flex",
                marginLeft: { xs: "0", sm: "37px" },
                backgroundColor: "white",
                alignItems: "center",
                height: "30px",
                borderRadius: "45px",
                marginTop: { xs: "0", sm: "0" },
                justifyContent: "space-around",
                width: {
                  xs: "100%",
                  sm: "180px",
                  md: "70%",
                  lg: "50%",
                  xl: "50%",
                },
              }}
            >
              <InputBase
                sx={{
                  fontSize: "15px",
                  width: {
                    xs: "100%",
                    sm: "180px",
                    md: "33%",
                    lg: "33%",
                    xl: "33%",
                  },
                }}
                placeholder="Search"
              />
              <Search sx={{ fontSize: "medium" }} />
              {/* <div className="search-box">
                <input type="text" placeholder="Type to search.." />
                <div className="search-icon">
                  <i className="fas fa-search" />
                  <div className="cancel-button1">
                    <svg
                      version="1.1"
                      type="button"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      width="20px"
                      height="20px"
                      viewBox="375.045 607.885 30.959 30.33"
                      enableBackground="new 375.045 607.885 30.959 30.33"
                      xmlSpace="preserve"
                    >
                      <path
                        fill="#664AFF"
                        d="M405.047,633.805l-7.007-6.542c-0.129-0.121-0.267-0.226-0.408-0.319c1.277-1.939,2.025-4.258,2.025-6.753 c0-6.796-5.51-12.306-12.307-12.306s-12.306,5.51-12.306,12.306s5.509,12.306,12.306,12.306c2.565,0,4.945-0.786,6.916-2.128 c0.122,0.172,0.257,0.337,0.418,0.488l7.006,6.542c1.122,1.048,2.783,1.093,3.709,0.101 C406.327,636.507,406.169,634.853,405.047,633.805z M387.351,629.051c-4.893,0-8.86-3.967-8.86-8.86s3.967-8.86,8.86-8.86 s8.86,3.967,8.86,8.86S392.244,629.051,387.351,629.051z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="cancel-icon">
                  <i className="fas fa-times" />
                  <div className="cancel-button">
                    <svg
                      version="1.1"
                      type="button"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      width="20px"
                      height="20px"
                      viewBox="375.045 607.885 30.959 30.33"
                      enableBackground="new 375.045 607.885 30.959 30.33"
                      xmlSpace="preserve"
                    >
                      <path
                        fill="white"
                        d="M405.047,633.805l-7.007-6.542c-0.129-0.121-0.267-0.226-0.408-0.319c1.277-1.939,2.025-4.258,2.025-6.753 c0-6.796-5.51-12.306-12.307-12.306s-12.306,5.51-12.306,12.306s5.509,12.306,12.306,12.306c2.565,0,4.945-0.786,6.916-2.128 c0.122,0.172,0.257,0.337,0.418,0.488l7.006,6.542c1.122,1.048,2.783,1.093,3.709,0.101 C406.327,636.507,406.169,634.853,405.047,633.805z M387.351,629.051c-4.893,0-8.86-3.967-8.86-8.86s3.967-8.86,8.86-8.86 s8.86,3.967,8.86,8.86S392.244,629.051,387.351,629.051z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="search-data"></div>
              </div> */}
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                display: "flex",
                marginRight: {
                  xs: "0px",
                  sm: "20px",
                  md: "25px",
                  lg: "25px",
                  xl: "25px",
                },
                alignItems: "center",
                justifyContent: { xs: "flex-end", sm: "flex-end" },
              }}
            >
              <Switch checked={theme === "dark"} onChange={toggleTheme} />
              <Notifications sx={{ color: "white" }} fontSize="small" />
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
      </Grid>
    </Box>
  );
}

export default Topbar;
