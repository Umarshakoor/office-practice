import { useContext } from "react";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { StateContext } from "../context/StateContext";

const Sidebar = () => {
  const { suggestions } = useContext(StateContext);

  const uniqueSuggestions = Array.from(new Set(suggestions)).slice(0, 6);

  return (
    <List>
      {uniqueSuggestions.map((suggestion, index) => (
        <ListItem key={index}>
          <ListItemAvatar>
            <Avatar>{suggestion[0].toUpperCase()}</Avatar>
          </ListItemAvatar>
          <ListItemText primary={suggestion} />
        </ListItem>
      ))}
    </List>
  );
};

export default Sidebar;
