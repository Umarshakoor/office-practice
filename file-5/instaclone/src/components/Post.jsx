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
  Favorite as FavoriteIcon,
  Share as ShareIcon,
  Comment as CommentIcon,
} from "@mui/icons-material";
import AddComment from "./AddComment";
import AddPost from "./AddPost";
import { dummyData } from "./Data";
import { StateContext } from "../context/StateContext";

const Post = () => {
  const [comments, setComments] = useState([]);

  const addComment = (comment) => {
    setComments([...comments, comment]);
  };

  const { posts, setPosts } = useContext(StateContext);

  /*  useEffect(() => {
    if (posts.length > 0) {
      localStorage.setItem("blogs", JSON.stringify(posts));
    }
  }, [posts]);

  useEffect(() => {
    const storedPost = JSON.parse(localStorage.getItem("posts"));
    if (storedPost) {
      setPosts(storedPost);
    }
  }, [setPosts]);

  useEffect(() => {
    const handleStorageChanges = (event) => {
      console.log(event);
      if (event.key === "posts") {
        setPosts(JSON.parse(event.newValue));
      }
    };
    window.addEventListener("storage", handleStorageChanges);

    return () => {
      window.removeEventListener("storage", handleStorageChanges);
    };
  }, []); */

  useEffect(() => {
    const storedPost = JSON.parse(localStorage.getItem("posts"));
    if (storedPost) {
      setPosts(storedPost);
    }
  }, [setPosts]);

  useEffect(() => {
    if (posts.length > 0) {
      localStorage.setItem("posts", JSON.stringify(posts));
    }
  }, [posts]);

  useEffect(() => {
    const handleStorageChanges = (event) => {
      console.log(event);
      if (event.key === "posts") {
        setPosts(JSON.parse(event.newValue));
      }
    };
    window.addEventListener("storage", handleStorageChanges);

    return () => {
      window.removeEventListener("storage", handleStorageChanges);
    };
  }, [setPosts]);

  const newdate = new Date().toDateString();
  console.log(newdate);

  return (
    <Card sx={{ marginBottom: 2, marginTop: 5, width: "70%", margin: "auto" }}>
      {posts.length > 0 &&
        posts.map((post, i) => (
          <Box key={i}>
            <CardHeader
              avatar={<Avatar aria-label="recipe">{post.name[0]}</Avatar>}
              title={post.name}
              subheader={newdate}
            />
            <CardMedia
              component="img"
              height="50%"
              // width="50"
              image={post.imagepng}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {post.description}
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
      {dummyData.map((data, i) => (
        <Box key={i}>
          <CardHeader
            avatar={<Avatar aria-label="recipe">{data.name[0]}</Avatar>}
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
