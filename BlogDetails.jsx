import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [dark, setDark] = useState(false);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    const foundBlog = blogs.find((b) => b.id.toString() === id);
    setBlog(foundBlog);

    if (foundBlog) {
      const related = blogs
        .filter((b) => b.id !== foundBlog.id && b.category === foundBlog.category)
        .slice(0, 3);
      setRelatedBlogs(related);
    }

    setDark(document.body.style.backgroundColor === "rgb(18, 18, 18)");

    const likedBlogs = JSON.parse(localStorage.getItem("likedBlogs")) || [];
    setLiked(likedBlogs.includes(id));
  }, [id]);

  if (!blog) return <h2>Blog not found</h2>;

  const words = blog.content.split(" ").length;
  const readTime = Math.ceil(words / 200); // 200 wpm

  const handleLike = () => {
    const likedBlogs = JSON.parse(localStorage.getItem("likedBlogs")) || [];
    let updatedLikes;
    if (liked) {
      updatedLikes = likedBlogs.filter((bid) => bid !== id);
    } else {
      updatedLikes = [...likedBlogs, id];
    }
    localStorage.setItem("likedBlogs", JSON.stringify(updatedLikes));
    setLiked(!liked);
  };

  const containerStyle = {
    padding: "20px",
    backgroundColor: dark ? "#222" : "#fff",
    color: dark ? "#fff" : "#000",
    minHeight: "80vh",
  };

  const buttonStyle = {
    padding: "10px 20px",
    cursor: "pointer",
    marginTop: "10px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: liked ? "red" : "#007bff",
    color: "#fff",
  };

  return (
    <div style={containerStyle}>
      <h1>{blog.title}</h1>
      <p><b>Author:</b> {blog.author}</p>
      <p><b>Date:</b> {blog.date}</p>
      <p><b>Category:</b> {blog.category}</p>
      <p><b>Read Time:</b> {readTime} min</p>

      {blog.image && (
        <img
          src={blog.image}
          alt={blog.title}
          style={{ width: "100%", maxWidth: "600px", borderRadius: "5px" }}
        />
      )}

      <p style={{ marginTop: "20px" }}>{blog.content}</p>

      <button style={buttonStyle} onClick={handleLike}>
        {liked ? "Unlike ❤️" : "Like 🤍"}
      </button>

      <br />
      <button
        onClick={() => navigate("/blogs")}
        style={{ ...buttonStyle, backgroundColor: dark ? "#555" : "#007bff", marginTop: "10px" }}
      >
        Back to Blogs
      </button>

      {relatedBlogs.length > 0 && (
        <div style={{ marginTop: "40px" }}>
          <h3>Related Blogs</h3>
          <ul>
            {relatedBlogs.map((b) => (
              <li key={b.id}>
                <Link to={`/blogs/${b.id}`} style={{ color: dark ? "#4fc3f7" : "#007bff" }}>
                  {b.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default BlogDetails;
