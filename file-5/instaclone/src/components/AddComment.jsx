import { useState } from "react";
import { TextField, Button } from "@mui/material";
import PropTypes from "prop-types";

const AddComment = ({ postId, addComment }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(postId, comment);
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit}>
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

AddComment.propTypes = {
  postId: PropTypes.string.isRequired,
  addComment: PropTypes.func.isRequired,
};

export default AddComment;
