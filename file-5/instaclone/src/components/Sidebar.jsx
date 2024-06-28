import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Container,
} from "@mui/material";
import { useContext } from "react";
import { StateContext } from "../context/StateContext";

const Sidebar = () => {
  // const recommendations = ["User1", "User2", "User3", "User4"];
  const { posts } = useContext(StateContext);
  const uniquefilter = posts.filter((post) => post.name);
  console.log(uniquefilter);
  const setfilter = new Set(uniquefilter);
  console.log(setfilter);
  return (
    <Container>
      <Box sx={{ padding: 2 }}>
        <Typography variant="h6">Suggestions for you</Typography>
        <List>
          {uniquefilter.map((post, name) => (
            <ListItem key={name}>
              <Avatar>{post.name[0]}</Avatar>
              <ListItemText primary={post.name} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default Sidebar;
