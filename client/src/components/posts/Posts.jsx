import React from "react";

import "./Posts.css";

import { PostsData } from "../../data/postsData";

import Post from "../post/Post";

const Posts = () => {
  return (
    <div className="Posts">
      {PostsData.map((post, id) => (
        <Post data={post} id={id} key={id} />
      ))}
    </div>
  );
};

export default Posts;
