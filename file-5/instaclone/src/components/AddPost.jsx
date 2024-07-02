import { useContext, useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { StateContext } from "../context/StateContext";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    id: new Date().getTime(),
    name: "",
    imagepng: "",
    description: "",
    date: new Date().toLocaleDateString("en-GB"),
  });

  const { posts, setPosts, suggestions, setSuggestions } =
    useContext(StateContext);
  const [posted, setPosted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (post.name && post.imagepng && post.description) {
      setPosts([post, ...posts]);

      if (!suggestions.includes(post.name)) {
        setSuggestions([...suggestions, post.name]);
      }

      setPost({
        id: new Date().getTime(),
        name: "",
        imagepng: "",
        description: "",
        date: new Date().toLocaleDateString("en-GB"),
      });
      setPosted(true);
      navigateToHome();
    } else {
      alert("Please fill all the fields");
    }
  };

  const navigateToHome = () => {
    if (posted) {
      navigate("/");
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

      <Button type="submit" variant="contained" onClick={navigateToHome}>
        Post
      </Button>
    </Box>
  );
};

export default AddPost;
