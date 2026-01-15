// src/pages/About.jsx
import React, { useState } from "react";
import "./about.css"; // Import the CSS file

const About = () => {
  const [dark, setDark] = useState(false);

  const toggleDarkMode = () => {
    setDark(!dark);
  };

  return (
    <div className={dark ? "about-container dark" : "about-container"}>
      <h1>About Me</h1>

      <section className="about-section">
        <h2>Personal Introduction</h2>
        <p>
          Hi! I'm komal, a passionate web developer and blogger. I love creating interactive and user-friendly web applications.
        </p>
      </section>

      <section className="about-section">
        <h2>Skills & Interests</h2>
        <ul>
          <li>React.js / JavaScript / HTML / CSS</li>
          <li>Web Development & UI Design</li>
          <li>Reading, Writing, and Technology Trends</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Purpose of this Blog</h2>
        <p>
          This blog is where I share tutorials, projects, and insights on web development, programming, and tech trends to help others learn and grow.
        </p>
      </section>

      <section className="about-section">
        <h2>Contact & Social Links</h2>
        <p>Email: your.email@example.com</p>
        <p>
          Connect with me: 
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">GitHub</a> |{" "}
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">LinkedIn</a>
        </p>
      </section>

      <button className="dark-mode-btn" onClick={toggleDarkMode}>
        {dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
};

export default About;
