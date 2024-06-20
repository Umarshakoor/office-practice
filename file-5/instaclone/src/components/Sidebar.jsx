import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Container,
} from "@mui/material";

const Sidebar = () => {
  const recommendations = ["User1", "User2", "User3", "User4"];

  return (
    <Container>
      <Box sx={{ padding: 2 }}>
        <Typography variant="h6">Suggestions for you</Typography>
        <List>
          {recommendations.map((user, index) => (
            <ListItem key={index}>
              <Avatar alt={user} src={`https://via.placeholder.com/40`} />
              <ListItemText primary={user} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default Sidebar;
