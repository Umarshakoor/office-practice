import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const AddPost = ({ addPost }) => {
  const [post, setPost] = useState({ name: "", imagepng: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(post);
    setPost({ name: "", imagepng: "" });
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
        label="Post Text"
        variant="outlined"
        fullWidth
        value={post.name}
        onChange={(e) => setPost({ ...post, name: e.target.value })}
      />
      <TextField
        label="Image URL"
        variant="outlined"
        fullWidth
        value={post.imagepng}
        onChange={(e) => setPost({ ...post, imagepng: e.target.value })}
      />
      <Button type="submit" variant="contained">
        Post
      </Button>
    </Box>
  );
};

export default AddPost;
