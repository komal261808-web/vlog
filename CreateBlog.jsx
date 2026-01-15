import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CreateBlog() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.body.style.backgroundColor === "rgb(18, 18, 18)");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description || !content || !category) {
      setError("All fields are required");
      return;
    }

    const newBlog = {
      id: Date.now(),
      title,
      description,
      content,
      category,
      image,
      author: "Admin",
      date: new Date().toLocaleDateString(),
    };

    const existingBlogs =
      JSON.parse(localStorage.getItem("blogs")) || [];

    localStorage.setItem(
      "blogs",
      JSON.stringify([...existingBlogs, newBlog])
    );

    navigate("/blogs");
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

  return (
    <div style={{ padding: "20px" }}>
      <h2>Create Blog</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Short Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={inputStyle}
        />

        <textarea
          placeholder="Blog Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="5"
          style={inputStyle}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={inputStyle}
        >
          <option value="">Select Category</option>
          <option value="Tech">Tech</option>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Education">Education</option>
        </select>

        <input
          type="text"
          placeholder="Image URL (optional)"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          style={inputStyle}
        />

        {image && (
          <img
            src={image}
            alt="Preview"
            style={{ width: "100%", marginBottom: "10px", borderRadius: "5px" }}
          />
        )}

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            cursor: "pointer",
            backgroundColor: dark ? "#555" : "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Create Blog
        </button>
      </form>
    </div>
  );
}

export default CreateBlog;







