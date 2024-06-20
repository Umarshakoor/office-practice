/* import { useState } from "react";
import { TextField, Button, Container, Box } from "@mui/material";

const AddPost = ({ addPost }) => {
  const [post, setPost] = useState({ text: "", image: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(post);
    setPost({ text: "", image: "" });
  };

  return (
    <Container>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <TextField
          label="Post Text"
          variant="outlined"
          fullWidth
          value={post.text}
          onChange={(e) => setPost({ ...post, text: e.target.value })}
        />
        <TextField
          label="Image URL"
          variant="outlined"
          fullWidth
          value={post.image}
          onChange={(e) => setPost({ ...post, image: e.target.value })}
        />
        <Button type="submit" variant="contained">
          Post
        </Button>
      </Box>
    </Container>
  );
};

export default AddPost;
 */
