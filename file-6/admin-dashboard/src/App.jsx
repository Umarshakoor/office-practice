import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Analytics from "./components/Analytics";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [selectedPage, setSelectedPage] = useState("Home");

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const handleLogin = (username) => setLoggedInUser(username);

  return (
    <Router>
      <div>{loggedInUser}</div>
      <div
        className={`app-container ${
          isSidebarOpen ? "sidebar-open" : "sidebar-closed"
        }`}
      >
        <Sidebar isOpen={isSidebarOpen} />
        <div className="main-content">
          <Navbar toggleSidebar={toggleSidebar} selectedPage={selectedPage} />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
