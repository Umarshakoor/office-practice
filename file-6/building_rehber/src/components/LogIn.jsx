import { Box, Button, Typography, TextField } from "@mui/material";
import { Facebook, Google } from "@mui/icons-material";
import { Link } from "react-router-dom";
function LogIn() {
  //   const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefualt();
  };
  return (
    <Box display="flex" flexDirection="row" height="100vh">
      <Box
        flex={0.5}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        p={3}
      >
        <Typography variant="h4">Log in</Typography>
        <Typography variant="body1">How do I get started</Typography>
        <Button variant="contained" startIcon={<Google />} sx={{ my: 1 }}>
          Continue with Google
        </Button>
        <Button variant="contained" startIcon={<Facebook />} sx={{ my: 1 }}>
          Continue with Facebook
        </Button>
        <Typography variant="body1">OR</Typography>
        <form onSubmit={handleLogin} style={{ width: "100%", maxWidth: 360 }}>
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
            Login
          </Button>
        </form>
        <Link to="/signup">Dont have an account? Sign up</Link>
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
        <Typography variant="h4">Good Projects are waiting for you</Typography>
      </Box>
    </Box>
  );
}

export default LogIn;
