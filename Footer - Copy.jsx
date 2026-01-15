import { useEffect, useState } from "react";

function Footer() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    // Detect current page background color
    setDark(document.body.style.backgroundColor === "rgb(18, 18, 18)");
  }, []);

  return (
    <footer
      style={{
        marginTop: "40px",
        padding: "20px",
        textAlign: "center",
        backgroundColor: dark ? "#222" : "#f2f2f2",
        color: dark ? "#fff" : "#000",
        transition: "all 0.3s",
      }}
    >
      <p>© 2026 My React Blog</p>

      <div style={{ marginTop: "10px" }}>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noreferrer"
          style={{ marginRight: "15px", color: dark ? "#fff" : "#000" }}
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noreferrer"
          style={{ color: dark ? "#fff" : "#000" }}
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;
