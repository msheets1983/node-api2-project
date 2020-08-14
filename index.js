require("dotenv").config();

const express = require("express");
const postsRouter = require("./posts/posts-router");

const server = express();
server.use(express.json());

server.use("/api/posts", postsRouter);

const port = process.env.PORT || 8000;
server.listen(port, () => {
  console.log(` Server Running on port ${port} `);
});
