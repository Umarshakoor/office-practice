import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
} from "@mui/material";
import {
  Favorite as FavoriteIcon,
  Share as ShareIcon,
  Comment as CommentIcon,
} from "@mui/icons-material";
// import AddComment from "./AddComment";

const Post = () => {
  /*   const [comments, setComments] = useState([]);

  const addComment = (comment) => {
    setComments([...comments, comment]);
  }; */

  return (
    <Card sx={{ marginBottom: 2, marginTop: 5 }}>
      <CardHeader
        avatar={<Avatar aria-label="recipe">R</Avatar>}
        title="Username"
        subheader="September 14, 2022"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://via.placeholder.com/300"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
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
      {/* <CardContent>
        <Typography paragraph>Comments:</Typography>
        {comments.map((comment, index) => (
          <Typography key={index} variant="body2" color="text.secondary">
            {comment}
          </Typography>
        ))}
      </CardContent> */}
      {/* <AddComment addComment={addComment} /> */}
    </Card>
  );
};

export default Post;
