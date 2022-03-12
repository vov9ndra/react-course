import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>New posts qwda</div>
      <Post message="i learn react" likesCount='13'/>
    </div>
  );
};

export default MyPosts;