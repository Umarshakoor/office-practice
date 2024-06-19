import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <Container>
      <Typography variant="h1" align="center" gutterBottom>
        Profile Page
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        This is your Profile Page.
      </Typography>
      <Button component={Link} to="/" variant="contained" color="primary">
        Go to Home
      </Button>
    </Container>
  );
}

export default Profile;
