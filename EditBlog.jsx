import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditBlog() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [dark, setDark] = useState(false);

  // Load blog data
  useEffect(() => {
    const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    const blog = blogs.find((b) => String(b.id) === id);

    if (blog) {
      setTitle(blog.title);
      setDescription(blog.description);
      setCategory(blog.category);
      setAuthor(blog.author);
      setContent(blog.content);
      setImage(blog.image);
    }

    setDark(document.body.style.backgroundColor === "rgb(18, 18, 18)");
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    const updatedBlogs = blogs.map((b) =>
      b.id === parseInt(id)
        ? { ...b, title, description, category, author, content, image }
        : b
    );
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
    navigate("/blogs");
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
      const filtered = blogs.filter((b) => b.id !== parseInt(id));
      localStorage.setItem("blogs", JSON.stringify(filtered));
      navigate("/blogs");
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "8px",
    marginBottom: "10px",
    backgroundColor: dark ? "#444" : "#fff",
    color: dark ? "#fff" : "#000",
    border: "1px solid #ccc",
    borderRadius: "4px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    border: "none",
    color: "#fff",
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Edit Blog</h2>
      <form onSubmit={handleUpdate}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} style={inputStyle} />
        <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} style={inputStyle} />
        
        <select value={category} onChange={(e) => setCategory(e.target.value)} style={inputStyle}>
          <option value="">Select Category</option>
          <option value="Tech">Tech</option>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Education">Education</option>
        </select>

        <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} style={inputStyle} />
        <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} style={inputStyle} />

        {image && <img src={image} alt="Preview" style={{ width: "100%", marginBottom: "10px", borderRadius: "5px" }} />}

        <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} style={{ ...inputStyle, height: "150px" }}></textarea>

        <button type="submit" style={{ ...buttonStyle, backgroundColor: dark ? "#555" : "#007bff" }}>Update Blog</button>
        <button type="button" onClick={handleDelete} style={{ ...buttonStyle, marginLeft: "10px", backgroundColor: "red" }}>Delete Blog</button>
      </form>
    </div>
  );
}

export default EditBlog;
