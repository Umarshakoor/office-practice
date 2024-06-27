import { useContext, useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { StateContext } from "../context/StateContext";
import { Link } from "react-router-dom";

const AddPost = () => {
  const [post, setPost] = useState({
    name: "",
    imagepng: "",
    description: "",
    // date: new Date().toISOString(),
    // date: "",
  });

  const { posts, setPosts } = useContext(StateContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    /* const newPosts = [post, ...posts]; */
    setPosts([post, ...posts]);
    setPost({
      name: "",
      imagepng: "",
      description: "",
      /* date: new Date().toISOString(), */
      // date: "",
    });

    /* const currPOST = localStorage.getItem("posts");
    currPOST.push(post); */

    localStorage.setItem("posts", JSON.stringify(setPosts));
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

      <Button type="submit" variant="contained" component={Link} to="/">
        Post
      </Button>
    </Box>
  );
};

export default AddPost;
