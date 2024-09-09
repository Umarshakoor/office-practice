import "./App.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddEditBlog from "./pages/AddEditBlog";
import Blog from "./pages/Blog";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import BlogApp from "./components/BlogApp";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <>
        <NavBar />
        <ToastContainer />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/blogapp" element={<BlogApp />} />
          <Route path="/addblog" element={<AddEditBlog />} />
          <Route path="/editblog/:id" element={<AddEditBlog />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
