import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    setBlogs(storedBlogs);

    setDark(document.body.style.backgroundColor === "rgb(18, 18, 18)");
  }, []);

  const filteredBlogs = blogs.filter((blog) => {
    const matchTitle = blog.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchCategory =
      category === "All" || blog.category === category;
    return matchTitle && matchCategory;
  });

  const deleteBlog = (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      const updatedBlogs = blogs.filter((blog) => blog.id !== id);
      localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
      setBlogs(updatedBlogs);
    }
  };

  const cardStyle = {
    border: "1px solid #ccc",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "5px",
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#000",
    transition: "all 0.3s",
  };

  return (
    <div className="container" style={{ padding: "20px" }}>
      <h2>All Blogs</h2>

      <input
        type="text"
        placeholder="Search by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginRight: "10px", padding: "5px" }}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{ padding: "5px" }}
      >
        <option value="All">All</option>
        <option value="Tech">Tech</option>
        <option value="Lifestyle">Lifestyle</option>
        <option value="Education">Education</option>
      </select>

      {filteredBlogs.length === 0 && <p>No blogs found</p>}

      {filteredBlogs.map((blog) => (
        <div className="blog-card" key={blog.id} style={cardStyle}>
          {blog.image && (
            <img
              src={blog.image}
              alt={blog.title}
              style={{ width: "100%", maxHeight: "200px", objectFit: "cover", borderRadius: "5px" }}
            />
          )}

          <h3>{blog.title}</h3>
          <p>{blog.description}</p>

          <p><strong>Author:</strong> {blog.author}</p>
          <p><strong>Date:</strong> {blog.date}</p>
          <p><strong>Category:</strong> {blog.category}</p>

          <Link to={`/blogs/${blog.id}`}>Read More</Link>
          <br /><br />

          <Link to={`/edit/${blog.id}`}>
            <button>Edit</button>
          </Link>

          <button
            style={{ marginLeft: "10px", backgroundColor: "red", color: "#fff" }}
            onClick={() => deleteBlog(blog.id)}
          >
            Delete
          </button>
        </div>
      ))}

      <Link to="/create">
        <button style={{ marginTop: "20px" }}>Create New Blog</button>
      </Link>
    </div>
  );
}

export default Blogs;
