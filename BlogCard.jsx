import { Link } from "react-router-dom";

function BlogCard({ blog, onDelete }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", marginBottom: "15px" }}>
      {blog.image && (
        <img
          src={blog.image}
          alt={blog.title}
          style={{ width: "100%", maxHeight: "200px", objectFit: "cover" }}
        />
      )}

      <h3>{blog.title}</h3>
      <p>{blog.description}</p>

      <p><strong>Category:</strong> {blog.category}</p>
      <p><strong>Author:</strong> {blog.author}</p>
      <p><strong>Date:</strong> {blog.date}</p>
       <p>
  <strong>Read Time:</strong>{" "}
  {calculateReadTime(blog.content)} min
</p>

      <Link to={`/blogs/${blog.id}`}>
        <button>Read More</button>
      </Link>

      <Link to={`/edit/${blog.id}`} style={{ marginLeft: "10px" }}>
        <button>Edit</button>
      </Link>

      <button
        onClick={() => onDelete(blog.id)}
        style={{ marginLeft: "10px" }}
      >
        Delete
      </button>
    </div>
  );
}

export default BlogCard;
