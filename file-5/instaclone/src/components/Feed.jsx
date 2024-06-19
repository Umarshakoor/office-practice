/* import { useContext } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
// import AppContext from "../context/AppContext.jsx";

function Feed() {
  // const { posts, addPost } = useContext(AppContext);

  return (
    <Container>
      {posts.map((post) => (
        <Card
          key={post.id}
          style={{ marginBottom: "1rem", backgroundColor: "inherit" }}
        >
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {post.text}
            </Typography>
            {post.image && (
              <img
                src={post.image}
                alt="Post"
                style={{ maxWidth: "100%", marginBottom: "0.5rem" }}
              />
            )}
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Like
            </Button>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Comment
            </Button>
          </CardActions>
          <Typography
            variant="caption"
            style={{ marginLeft: "1rem", marginBottom: "0.5rem" }}
          >
            Posted by {post.user} on {new Date(post.createdAt).toLocaleString()}
          </Typography>
        </Card>
      ))}
    </Container>
  );
}

export default Feed;
 */
