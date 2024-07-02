import react, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Link } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import loginpng from "../assets/loginpng.svg";
import fb from "../assets/facebook.svg";
import google from "../assets/google.svg";
import "../index.css";

const SignUp = () => {
  //   const history = useHistory();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleLogin = (e) => {
    e.preventDefualt();
  };

  const handleSignUp = (event) => {
    event.preventDefault();
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
              }}
            >
              Log in
            </Typography>
            <Typography sx={{ fontWeight: "400", fontSize: "13px" }}>
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
                  sx={{
                    my: 1,
                    p: "1",
                    border: "1px solid rgba(0, 0, 0, .4)",
                    borderRadius: "10px",
                    color: "black",
                    fontSize: "18px",
                    fontWeight: "500",
                    textTransform: "none",
                  }}
                  disableRipple
                >
                  Continue with Google
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
                    sx={{
                      my: 1,
                      p: "1",
                      border: "1px solid rgba(0, 0, 0, .4)",
                      borderRadius: "10px",
                      color: "black",
                      fontSize: "18px",
                      fontWeight: "500",
                      textTransform: "none",
                    }}
                    disableRipple
                  >
                    Continue with facebook
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Typography marginY={"20px"}>OR</Typography>
            <form
              onSubmit={handleLogin}
              style={{ width: "361px", maxWidth: 360 }}
            >
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                sx={{ my: 1 }}
              />
              <FormControl fullWidth>
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
                  width: "361px",
                  height: "50px",
                  fontWeight: "600",
                  fontSize: "20px",
                }}
                disableRipple
              >
                Login
              </Button>
            </form>
            <Box display={"flex"} gap={"10px"}>
              <Typography display={"inline"}>Dont have an account?</Typography>
              <Link to="/signup"> Sign up</Link>
            </Box>
          </Box>
        </Grid>
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
            <Typography marginTop={"70px"} fontSize={"18px"} fontWeight={"600"}>
              BUILDING REHBER
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Box display="flex" flexDirection="row" height="100vh">
        <Box
          flex={0.5}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={3}
        >
          <Typography variant="h4">Sign Up</Typography>
          <Typography variant="body1">How do I get started</Typography>
          <Button variant="contained" startIcon={<Google />} sx={{ my: 1 }}>
            Continue with Google
          </Button>
          <Button variant="contained" startIcon={<Facebook />} sx={{ my: 1 }}>
            Continue with Facebook
          </Button>
          <Typography variant="body1">OR</Typography>
          <form
            onSubmit={handleSignUp}
            style={{ width: "100%", maxWidth: 360 }}
          >
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              sx={{ my: 1 }}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              sx={{ my: 1 }}
            />
            <Button variant="contained" type="submit" fullWidth sx={{ my: 1 }}>
              Sign Up
            </Button>
          </form>
          <Link to="/login">Already have an account? Log in</Link>
        </Box>
        <Box
          flex={1}
          bgcolor="primary.main"
          display="flex"
          justifyContent="center"
          alignItems="center"
          color="white"
          p={3}
        >
          <Typography variant="h4">
            Good Projects are waiting for you
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default SignUp;
