import React from "react";
import Post from "./Post/Post";
import { useSelector } from "react-redux";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  console.log(posts, "from the posts");
  return !posts.length ? (
    <h1>Loading...</h1>
  ) : (
    <div className="container">
      {posts.map((post) => (
        <div className="post-container">
          <Post key={post._id} post={post} setCurrentId={setCurrentId} />
        </div>
      ))}
    </div>
  );
};
export default Posts;
