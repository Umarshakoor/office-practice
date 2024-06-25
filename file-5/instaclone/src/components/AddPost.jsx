import { useContext, useState, useEffect } from "react";
import { TextField, Button, Box } from "@mui/material";
import { StateContext } from "../context/StateContext";

const AddPost = () => {
  const [post, setPost] = useState({
    name: "",
    imagepng: "",
    description: "",
    date: "",
  });

  // let date = new Date().toUTCString().slice(5, 16);

  const { posts, setPosts } = useContext(StateContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPosts([...posts, post]);
    setPost({ name: "", imagepng: "" });
    const currPOST = localStorage.getItem("posts");
    currPOST.push(post);
    console.log(currPOST);
    console.log(posts);
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
