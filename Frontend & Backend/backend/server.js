const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/posts", async (req, res) => { // Goto http://localhost:5000/posts
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=2"
    );
    const posts = await response.json();
    res.json(posts);
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    res.status(500).json({ error: "Unable to retrieve posts" });
  }
});

app.get("/post/:id", async (req, res) => { // Goto http://localhost:5000/post/1
  const { id } = req.params;
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const post = await response.json();
    res.json(post);
  } catch (error) {
    console.error("Failed to fetch post:", error);
    res.status(500).json({ error: "Unable to retrieve post" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
