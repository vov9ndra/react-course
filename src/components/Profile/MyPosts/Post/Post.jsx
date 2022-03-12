import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://avatars.mds.yandex.net/get-zen_doc/1565406/pub_5e4f74096e1cd54e7a5d03a0_5e4f7871e1f3c67ff23919b1/scale_1200"></img>
      {props.message}
      <div>
          <span>Like</span> {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
