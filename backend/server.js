const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  authSource: "admin",
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
});
const Post = mongoose.model("Post", postSchema);

app.get("/posts", async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

app.post("/posts", async (req, res) => {
  const newPost = new Post(req.body);
  await newPost.save();
  res.json({ message: "Příspěvek uložen!" });
});

app.listen(process.env.PORT, () => {
  console.log(`Server běží na portu ${process.env.PORT}`);
});
