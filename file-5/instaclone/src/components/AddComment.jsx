import { useState } from "react";
import { TextField, Button } from "@mui/material";

const AddComment = ({ id, addComment }) => {
  const [comment, setComment] = useState("");

  const handleComment = (e) => {
    e.preventDefault();
    addComment(id, comment);
    setComment("");
  };
  console.log("addcomment", id);
  console.log("addcomment", comment);

  return (
    <form onSubmit={handleComment}>
      <TextField
        label="Add a comment"
        variant="outlined"
        size="small"
        fullWidth
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        sx={{ marginBottom: 1 }}
      />
      <Button type="submit" variant="contained" size="small">
        Post
      </Button>
    </form>
  );
};

export default AddComment;
