import React from "react";

const PostInfo = ({ post }) => {
  return (
    <div className="post-info">
      <div className="author">
        <strong>{post.author.name}</strong> ({post.author.age})
      </div>
      <time>{post.date}</time>
    </div>
  );
};

export default PostInfo;
