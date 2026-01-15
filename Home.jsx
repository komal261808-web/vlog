import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {
  const [dark, setDark] = useState(false);
  const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
  const latestBlogs = blogs.slice(-3).reverse();

  useEffect(() => {
    setDark(document.body.style.backgroundColor === "rgb(18, 18, 18)");
  }, []);

  const cardStyle = {
    border: "1px solid #ccc",
    padding: "15px",
    marginBottom: "15px",
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#000",
    borderRadius: "5px",
    transition: "all 0.3s",
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* Hero Section */}
      <section style={{ marginBottom: "40px" }}>
        <h1>My Personal Blog</h1>
        <p>
          Welcome to my blog where I share knowledge, experiences, and ideas
          related to technology, education, and lifestyle.
        </p>
      </section>

      {/* Latest Blogs */}
      <section>
        <h2>Latest Blogs</h2>

        {latestBlogs.length === 0 && <p>No blogs available.</p>}

        {latestBlogs.map((blog) => (
          <div key={blog.id} style={cardStyle}>
            {blog.image && (
              <img src={blog.image} alt="blog" width="100%" style={{ marginBottom: "10px", borderRadius: "5px" }} />
            )}
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
            <Link to={`/blogs/${blog.id}`}>Read More</Link>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Home;
