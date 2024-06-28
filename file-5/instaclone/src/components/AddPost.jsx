import { useContext, useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { StateContext } from "../context/StateContext";
import { Link, useNavigate } from "react-router-dom";

const AddPost = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    id: new Date(),
    name: "",
    imagepng: "",
    description: "",
    date: new Date().toLocaleDateString("en-GB"),
  });

  const { posts, setPosts } = useContext(StateContext);
  const [posted, setPosted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPosts([post, ...posts]);
    setPost({
      name: "",
      imagepng: "",
      description: "",
    });
    setPosted(true);
    navigateToHome();
  };

  const navigateToHome = () => {
    if (posted) {
      navigate("/");
    } else {
      alert("Form fill kro");
    }
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

      <Button
        type="submit"
        variant="contained"
        component={Link}
        onClick={handleSubmit}
        to={posted ? "/home" : "/add"}
        // disabled={!post.name || !post.description || !post.imagepng}
      >
        Post
      </Button>
    </Box>
  );
};

export default AddPost;
