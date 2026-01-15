import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [dark, setDark] = useState(false);

  const toggleMode = () => {
    setDark(!dark);
    // Change background & text color of whole page
    document.body.style.backgroundColor = dark ? "#f9f9f9" : "#121212";
    document.body.style.color = dark ? "#000" : "#fff";
  };

  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid gray", display: "flex", alignItems: "center" }}>
      <h1 style={{ marginRight: "20px" }}>My Blog</h1>

      <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
      <Link to="/blogs" style={{ marginRight: "10px" }}>All Blogs</Link>
      <Link to="/create" style={{ marginRight: "10px" }}>Create Blog</Link>
      <Link to="/about" style={{ marginRight: "10px" }}>About</Link>

      {/* Dark Mode Toggle Button */}
      <button 
        onClick={toggleMode} 
        style={{
          marginLeft: "auto",
          padding: "5px 10px",
          cursor: "pointer",
          borderRadius: "5px",
          border: "none",
        }}
      >
        {dark ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
}

export default Navbar;



