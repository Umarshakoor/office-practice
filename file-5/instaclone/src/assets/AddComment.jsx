/* import { useState } from "react";
import { TextField, Button } from "@mui/material";

const AddComment = ({ addComment }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(comment);
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

export default AddComment;
 */
