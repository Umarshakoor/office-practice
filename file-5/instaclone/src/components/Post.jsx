import { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import {
  Favorite as FavoriteIcon,
  Share as ShareIcon,
  Comment as CommentIcon,
} from "@mui/icons-material";
import AddComment from "./AddComment";
import AddPost from "./AddPost";
import { dummyData } from "./Data";

const Post = ({ post }) => {
  const [comments, setComments] = useState([]);

  const addComment = (comment) => {
    setComments([...comments, comment]);
  };

  return (
    <Card sx={{ marginBottom: 2, marginTop: 5, width: "70%", margin: "auto" }}>
      {dummyData.map((data, i) => (
        <Box key={i}>
          <CardHeader
            avatar={<Avatar aria-label="recipe">R</Avatar>}
            title={data.name}
            subheader={data.date}
          />
          <CardMedia
            component="img"
            height="50%"
            // width="50"
            image={data.postpng}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {data.description}
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
          <CardContent>
            <Typography paragraph>Comments:</Typography>
            {comments.map((comment, i) => (
              <Typography key={i} variant="body2" color="text.secondary">
                {comment}
              </Typography>
            ))}
          </CardContent>
          <AddComment addComment={addComment} />
        </Box>
      ))}
    </Card>
  );
};

export default Post;
