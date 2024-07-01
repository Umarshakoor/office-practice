import { useState, useContext, useEffect } from "react";
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
  Favorite,
  Share,
  Comment,
  FavoriteBorder,
  Delete,
} from "@mui/icons-material";
import AddComment from "./AddComment";
import { StateContext } from "../context/StateContext";

const Post = () => {
  const { posts, setPosts, comments, setComments, query } =
    useContext(StateContext);
  const [likes, setLikes] = useState({});
  const [isLiked, setIsLiked] = useState({});

  const handleLike = (postId) => {
    setIsLiked((prevLikes) => ({
      ...prevLikes,
      [postId]: !prevLikes[postId],
    }));

    setLikes((prevLikes) => ({
      ...prevLikes,
      [postId]: prevLikes[postId] ? prevLikes[postId] + 1 : 1,
    }));
  };

  const addComment = (postId, comment) => {
    setComments((prevComments) => ({
      ...prevComments,
      [postId]: [...(prevComments[postId] || []), comment],
    }));
  };

  const deletePost = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
    setComments((prevComments) => {
      const { [postId]: _, ...rest } = prevComments;
      return rest;
    });
  };

  useEffect(() => {
    if (posts.length > 0) {
      localStorage.setItem("posts", JSON.stringify(posts));
    }
  }, [posts]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts"));
    if (storedPosts) {
      setPosts(storedPosts);
    }
  }, []);

  const filterArray = posts.filter((post) => post.name.includes(query));

  return (
    <Card
      sx={{
        marginBottom: 2,
        marginTop: 5,
        width: "70%",
        margin: "auto",
        border: "2px solid blue",
      }}
    >
      {!query
        ? posts.length > 0 &&
          posts.map((post) => (
            <Box key={post.id} border={"5px solid green"}>
              <CardHeader
                avatar={<Avatar aria-label="recipe">{post.name[0]}</Avatar>}
                title={post.name}
                subheader={post.date}
              />
              <CardMedia
                component="img"
                height="50%"
                image={post.imagepng}
                alt="Post image"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {post.description}
                </Typography>
              </CardContent>

              <CardActions disableSpacing>
                <IconButton
                  aria-label="like"
                  color={isLiked[post.id] ? "primary" : "default"}
                  onClick={() => handleLike(post.id)}
                >
                  {isLiked[post.id] ? <Favorite /> : <FavoriteBorder />}
                  {likes[post.id] || 0}
                </IconButton>
                <IconButton aria-label="share">
                  <Share />
                </IconButton>
                <IconButton aria-label="comment">
                  <Comment />
                </IconButton>
                <IconButton
                  aria-label="delete"
                  onClick={() => deletePost(post.id)}
                >
                  <Delete />
                </IconButton>
              </CardActions>

              <CardContent key={post.id}>
                <Typography paragraph>Comments:</Typography>
                {comments[post.id] &&
                  comments[post.id].map((comment, i) => (
                    <Typography key={i} variant="body2" color="text.secondary">
                      {comment}
                    </Typography>
                  ))}
              </CardContent>
              <AddComment postId={post.id} addComment={addComment} />
            </Box>
          ))
        : filterArray.map((post) => (
            <Box key={post.id}>
              <CardHeader
                avatar={<Avatar>{post.name[0]}</Avatar>}
                title={post.name}
                subheader={post.date}
              />
              <CardMedia
                component="img"
                height="50%"
                image={post.imagepng}
                alt="Post image"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {post.description}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton
                  aria-label="like"
                  color={isLiked[post.id] ? "primary" : "default"}
                  onClick={() => handleLike(post.id)}
                >
                  {isLiked[post.id] ? <Favorite /> : <FavoriteBorder />}
                  {likes[post.id] || 0}
                </IconButton>
                <IconButton aria-label="share">
                  <Share />
                </IconButton>
                <IconButton aria-label="comment">
                  <Comment />
                </IconButton>
                <IconButton
                  aria-label="delete"
                  onClick={() => deletePost(post.id)}
                >
                  <Delete />
                </IconButton>
              </CardActions>
              <CardContent key={post.id}>
                <Typography paragraph>Comments:</Typography>
                {comments[post.id] &&
                  comments[post.id].map((comment, i) => (
                    <Typography key={i} variant="body2" color="text.secondary">
                      {comment}
                    </Typography>
                  ))}
              </CardContent>
              <AddComment postId={post.id} addComment={addComment} />
            </Box>
          ))}
    </Card>
  );
};

export default Post;
