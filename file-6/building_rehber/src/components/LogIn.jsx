import { useState } from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  InputAdornment,
  OutlinedInput,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Link } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import loginpng from "../assets/loginpng.svg";
import fb from "../assets/facebook.svg";
import google from "../assets/google.svg";
import "../index.css";

function LogIn() {
  //   const history = useHistory();

  const isSmallScreen = useMediaQuery("(max-width: 900px");
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleLogin = (e) => {
    e.preventDefualt();
  };
  return (
    <>
      <Grid container display={"flex"}>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "30px",
                marginTop: "10px",
              }}
            >
              Log in
            </Typography>
            <Typography
              sx={{ fontWeight: "400", fontSize: "13px", marginY: "2px" }}
            >
              How do i get started
            </Typography>
            <Grid
              container
              flexDirection={"column"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Grid item display={"flex"} alignItems={"center"} xs={12} md={12}>
                <img src={google} style={{ marginRight: "10px" }} />
                <Button
                  size="small"
                  sx={{
                    my: 1,
                    p: "1",
                    border: "1px solid rgba(0, 0, 0, .4)",
                    borderRadius: "10px",
                    color: "black",
                    fontSize: "16px",
                    fontWeight: "500",
                    textTransform: "none",
                  }}
                  disableRipple
                >
                  <b> Continue with Google</b>
                </Button>
              </Grid>
              <Grid>
                <Grid
                  item
                  display={"flex"}
                  alignItems={"center"}
                  xs={12}
                  md={12}
                >
                  <img
                    src={fb}
                    height={"32px"}
                    width={"32px"}
                    style={{ marginRight: "10px" }}
                  />
                  <Button
                    size="small"
                    sx={{
                      my: 1,
                      p: "1",
                      border: "1px solid rgba(0, 0, 0, .4)",
                      borderRadius: "10px",
                      color: "black",
                      fontSize: "16px",
                      fontWeight: "500",
                      textTransform: "none",
                    }}
                    disableRipple
                  >
                    <b>Continue with facebook</b>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Typography marginY={"10px"}>OR</Typography>
            <form
              onSubmit={handleLogin}
              style={{
                width: "300px",
                // display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <TextField
                label="Email"
                variant="outlined"
                size="small"
                sx={{
                  my: 1,
                  width: { xs: "300px", md: "250px", lg: "300px" },
                  height: "10px",
                  marginBottom: "40px",
                }}
              />
              <FormControl fullWidth size="small">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>

              <Typography
                sx={{
                  fontSize: "10px",
                  fontWeight: "500",
                  color: "rgba(30, 45, 126, 1)",
                  marginBottom: "20px",
                }}
                textAlign={"right"}
              >
                forget password
              </Typography>
              <Button
                type="submit"
                sx={{
                  my: 1,
                  transition: "none",
                  borderRadius: "31px",
                  backgroundColor: "rgba(24, 85, 142, 1)",
                  color: "white",
                  width: "300px",
                  height: "50px",
                  fontWeight: "600",
                  fontSize: "20px",
                  "&:hover": { backgroundColor: "rgba(24, 85, 142, 1)" },
                }}
                disableRipple
              >
                Login
              </Button>
            </form>
            <Box display={"flex"} gap={"10px"} marginTop={"30px"}>
              <Typography display={"inline"}>Dont have an account?</Typography>
              <Link to="/signup"> Sign up</Link>
            </Box>
          </Box>
        </Grid>
        {!isSmallScreen && (
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <Box
              item
              bgcolor="primary.main"
              display="flex"
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              color="white"
              height={"100vh"}
            >
              <Typography fontSize={"28px"} fontWeight={"700"}>
                Good Projects are waiting for you
              </Typography>
              <img src={loginpng} height={"372px"} width={"340px"} />
              <Typography
                marginTop={"70px"}
                fontSize={"18px"}
                fontWeight={"600"}
              >
                BUILDING REHBER
              </Typography>
            </Box>
          </Grid>
        )}
      </Grid>
    </>
  );
}

export default LogIn;
