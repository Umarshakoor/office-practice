import { useState, useContext, useEffect, useId } from "react";
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
import { Favorite, Share, Comment, FavoriteBorder } from "@mui/icons-material";
import AddComment from "./AddComment";
import { StateContext } from "../context/StateContext";

const Post = () => {
  const [comments, setComments] = useState([]);
  const { posts, setPosts, query } = useContext(StateContext);
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const id = useId();
  console.log(id);

  console.log(posts);

  // function for handling like
  function handleLike() {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  }

  const addComment = (comment) => {
    setComments([...comments, comment]);
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

  // const newdate = new Date().toDateString();

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
          posts.map((post, i) => (
            <Box key={i} border={"5px solid green"}>
              <box>
                <CardHeader
                  avatar={<Avatar aria-label="recipe">{post.name[0]}</Avatar>}
                  title={post.name}
                  subheader={post.date}
                />
              </box>
              <CardMedia
                component="img"
                height="50%"
                image={post.imagepng}
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {post.description}
                </Typography>
              </CardContent>

              <CardActions disableSpacing>
                <IconButton
                  aria-label="like"
                  color={isLiked ? "primary" : "default"}
                  onClick={handleLike}
                >
                  {isLiked ? <Favorite /> : <FavoriteBorder />}
                  {`${likes === !likes ? 0 : likes}`}
                </IconButton>
                <IconButton aria-label="share">
                  <Share />
                </IconButton>
                <IconButton aria-label="comment">
                  <Comment />
                </IconButton>
              </CardActions>

              <CardContent key={post.id}>
                <Typography paragraph>Comments:</Typography>
                {comments.map((comment, i) => (
                  <Typography key={i} variant="body2" color="text.secondary">
                    {comment}
                  </Typography>
                ))}
              </CardContent>
              <AddComment addComment={addComment} />
            </Box>
          ))
        : filterArray.map((post, i) => (
            <Box key={i}>
              <CardHeader
                avatar={<Avatar>{post.name[0]}</Avatar>}
                title={post.name}
                subheader={post.date}
              />
              <CardMedia
                component="img"
                height="50%"
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
                  <Favorite />
                </IconButton>
                <IconButton aria-label="share">
                  <Share />
                </IconButton>
                <IconButton aria-label="comment">
                  <Comment />
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

//hardcoded dummydata
{
  /* {dummyData.map((data, i) => (
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
      ))} */
}
