import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container>
      <Typography variant="h1" align="center" gutterBottom>
        Home Page
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Welcome to the Home Page!
      </Typography>
      <Button component={Link} to="/feed" variant="contained" color="primary">
        Go to Feed
      </Button>
    </Container>
  );
}

export default Home;
