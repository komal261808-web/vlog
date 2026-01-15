export const getBlogs = () => {
  return JSON.parse(localStorage.getItem("blogs")) || [];
};

export const saveBlogs = (blogs) => {
  localStorage.setItem("blogs", JSON.stringify(blogs));
};
export const calculateReadTime = (content) => {
  const words = content.split(" ").length;
  return Math.ceil(words / 200);
};
