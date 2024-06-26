import {
  Grid,
  Box,
  AppBar,
  Typography,
  createTheme,
  Container,
  Hidden,
  Drawer,
  Paper,
  Button,
} from "@mui/material";

// Grid System: The Grid component uses breakpoints to define how the layout changes across different screen sizes.
<Box>
  <Grid container>
    <Grid item xs={12} sm={6} md={4}></Grid>
  </Grid>
  {/* Box Component: The Box component allows you to define CSS properties based on
  breakpoints using the sx prop. */}
  <Box sx={{ width: { xs: "100%", sm: "50%", md: "33%" } }}>
    {/* Content */}
  </Box>
  {/* Typography Component: Breakpoints can be used to change typography
  properties like font size or line height. */}
  <Typography sx={{ fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" } }}>
    Responsive Typography
  </Typography>
  {/* Container Component: The Container component can be responsive using the
  maxWidth prop. */}
  <Container maxWidth={{ xs: "sm", md: "lg" }}>{/* Content */}</Container>; //
  {/* Hidden Component: The Hidden component allows you to hide content based on
  breakpoints. */}
  <Hidden smDown>{/* Hidden on small screens and down */}</Hidden>;
  {/* Drawer Component: The Drawer component can be responsive using the variant prop and
  the breakpoints in the sx prop. */}
  <Drawer variant="temporary" sx={{ display: { xs: "block", md: "none" } }}>
    {/* Drawer content */}
  </Drawer>
  {/* // AppBar Component: You can use breakpoints to style the AppBar component
  responsively. */}
  <AppBar position="static" sx={{ display: { xs: "none", sm: "block" } }}>
    {/* AppBar content */}
  </AppBar>
  {/* // Paper Component: The Paper component can be styled responsively using the
  sx prop. */}
  <Paper sx={{ padding: { xs: 2, sm: 3, md: 4 } }}>{/* Paper content */}</Paper>
  {/* // Button Component: Buttons can also use breakpoints for responsive styling. */}
  <Button sx={{ fontSize: { xs: "0.75rem", sm: "1rem", md: "1.25rem" } }}>
    Responsive Button
  </Button>
</Box>;
// Theme Customization: Breakpoints can be defined in the theme and used throughout your application.
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

function SpacingExample() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Paper>Item 1</Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper>Item 2</Paper>
      </Grid>
    </Grid>
  );
}
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

function SpacingBoxExample() {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <Paper>Item 1</Paper>
      <Paper>Item 2</Paper>
    </Box>
  );
}
import Box from "@mui/material/Box";

function FlexGrowExample() {
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ flexGrow: 1, bgcolor: "primary.main", p: 2 }}>Flex Item 1</Box>
      <Box sx={{ flexGrow: 2, bgcolor: "secondary.main", p: 2 }}>
        Flex Item 2
      </Box>
    </Box>
  );
}
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

function CombinedExample() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Box sx={{ flexGrow: 1, bgcolor: "primary.main", p: 2 }}>
            <Paper>Flex Item 1</Paper>
          </Box>
          <Box sx={{ flexGrow: 2, bgcolor: "secondary.main", p: 2 }}>
            <Paper>Flex Item 2</Paper>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper>Grid Item 1</Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper>Grid Item 2</Paper>
      </Grid>
    </Grid>
  );
}

export default CombinedExample;


import { useContext, useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { StateContext } from "../context/StateContext";

const AddPost = () => {
  const [post, setPost] = useState({
    name: "",
    imagepng: "",
    description: "",
    date: new Date().toISOString(),
  });

  const { posts, setPosts } = useContext(StateContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPosts = [post, ...posts]; // Add new post at the top
    setPosts(newPosts);
    setPost({ name: "", imagepng: "", description: "", date: new Date().toISOString() });

    // Handle local storage
    localStorage.setItem("posts", JSON.stringify(newPosts));
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        marginTop: "20px",
      }}
    >
      <TextField
        label="Full Name"
        variant="outlined"
        value={post.name}
        required
        onChange={(e) => setPost({ ...post, name: e.target.value })}
      />
      <TextField
        label="Image URL"
        variant="outlined"
        fullWidth
        value={post.imagepng}
        required
        onChange={(e) => setPost({ ...post, imagepng: e.target.value })}
      />
      <TextField
        label="Description"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        value={post.description}
        required
        onChange={(e) => setPost({ ...post, description: e.target.value })}
      />
      <Button type="submit" variant="contained">
        Post
      </Button>
    </Box>
  );
};

export default AddPost;


import { useState, useContext, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import {
  Favorite as FavoriteIcon,
  Share as ShareIcon,
  Comment as CommentIcon,
} from "@mui/icons-material";
import AddComment from "./AddComment";
import { dummyData } from "./Data";
import { StateContext } from "../context/StateContext";

const Post = () => {
  const [comments, setComments] = useState({});
  const { posts, setPosts } = useContext(StateContext);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts"));
    if (storedPosts) {
      setPosts(storedPosts);
    }
  }, [setPosts]);

  useEffect(() => {
    if (posts.length > 0) {
      localStorage.setItem("posts", JSON.stringify(posts));
    }
  }, [posts]);

  useEffect(() => {
    const handleStorageChanges = (event) => {
      if (event.key === "posts") {
        setPosts(JSON.parse(event.newValue));
      }
    };
    window.addEventListener("storage", handleStorageChanges);

    return () => {
      window.removeEventListener("storage", handleStorageChanges);
    };
  }, [setPosts]);

  const addComment = (postIndex, comment) => {
    const newComments = { ...comments };
    if (!newComments[postIndex]) {
      newComments[postIndex] = [];
    }
    newComments[postIndex].push(comment);
    setComments(newComments);
  };

  const renderPost = (post, index) => (
    <Box key={index} sx={{ marginBottom: 2 }}>
      <CardHeader
        avatar={<Avatar aria-label="recipe">{post.name[0]}</Avatar>}
        title={post.name}
        subheader={new Date(post.date).toDateString()}
      />
      <CardMedia
        component="img"
        height="50%"
        image={post.imagepng}
        alt="Post image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="comment">
          <CommentIcon />
        </IconButton>
      </CardActions>
      <CardContent>
        <Typography paragraph>Comments:</Typography>
        {comments[index] &&
          comments[index].map((comment, i) => (
            <Typography key={i} variant="body2" color="text.secondary">
              {comment}
            </Typography>
          ))}
      </CardContent>
      <AddComment addComment={(comment) => addComment(index, comment)} />
    </Box>
  );

  return (
    <Box sx={{ marginTop: 5, width: "70%", margin: "auto" }}>
      {posts.length > 0
        ? posts.map((post, index) => renderPost(post, index))
        : dummyData.map((data, index) => renderPost(data, index))}
    </Box>
  );
};

export default Post;
