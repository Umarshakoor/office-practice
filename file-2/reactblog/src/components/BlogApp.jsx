import { useState, useEffect } from "react";
import "./BlogApp.css";

const BlogApp = () => {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [empty, setEmpty] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  //    stringify that data when storing and parse it when reading it.

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs"));
    if (storedBlogs) {
      setBlogs(storedBlogs);
    }
  }, []);

  useEffect(() => {
    if (blogs.length > 0) {
      localStorage.setItem("blogs", JSON.stringify(blogs));
    }
  }, [blogs]);

  useEffect(() => {
    const handleStorageChanges = (event) => {
      console.log(event);
      if (event.key === "blogs") {
        setBlogs(JSON.parse(event.newValue));
      }
    };
    window.addEventListener("storage", handleStorageChanges);

    return () => {
      window.removeEventListener("storage", handleStorageChanges);
    };
  }, []);

  const handleAddBlog = () => {
    if (editingIndex !== null) {
      const updatedBlogs = blogs.map((blog, index) =>
        index === editingIndex ? { title, content } : blog
      );
      setBlogs(updatedBlogs);
      setEditingIndex(null);
    } else {
      setBlogs([...blogs, { title, content }]);
    }
    setTitle("");
    setContent("");
  };

  const handleEditBlog = (index) => {
    setTitle(blogs[index].title);
    setContent(blogs[index].content);
    setEditingIndex(index);
  };

  const handleDeleteBlog = (index) => {
    const updatedBlogs = blogs.filter((_, i) => i !== index);
    setBlogs(updatedBlogs);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`blog-app ${darkMode ? "dark-mode" : ""}`}>
      <h1>Blog App</h1>
      <button className="toggle-mode" onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <div className="blog-form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button
          onClick={handleAddBlog}
          disabled={title.trim() === "" || content.trim() === ""}
        >
          {editingIndex !== null ? "Update Blog" : "Add Blog"}
        </button>
      </div>
      <div className="blog-list">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-item">
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            <button onClick={() => handleEditBlog(index)}>Edit</button>
            <button onClick={() => handleDeleteBlog(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogApp;
