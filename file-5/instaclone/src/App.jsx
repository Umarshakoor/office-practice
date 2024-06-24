import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { Container } from "@mui/material";
import AddPost from "./components/AddPost";

function App() {
  const [posts, setPosts] = useState([]);
  console.log(posts);

  const addPost = (post) => {
    setPosts([post, ...posts]);
    console.log(setPosts);
  };
  return (
    <>
      <Router>
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<Home posts={posts} />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/add" element={<AddPost addPost={addPost} />} />
          </Routes>
        </Container>
      </Router>
    </>
  );
}

export default App;
