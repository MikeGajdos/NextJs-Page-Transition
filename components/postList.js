import React from "react";
import Link from "next/link";
import Image from "next/image";
import PostInfo from "./postInfo";
import FadeInOut from "../animation/FadeInOut";

const PostList = ({ posts }) => {
  return (
    <div>
      <div className="posts">
        {posts.map((post) => {
          return (
            <FadeInOut key={post.id} className="post">
              <div className="post">
                <div style={{ display: "block" }}>
                  <Link href={`/posts/${post.id}`} passHref>
                    <a>
                      <Image
                        src={`/image-${post.id}.jpg`}
                        layout="responsive"
                        width={200}
                        height={200}
                        alt="fuck access"
                      />
                    </a>
                  </Link>
                  <PostInfo post={post} />
                </div>
              </div>
            </FadeInOut>
          );
        })}
      </div>
    </div>
  );
};

export default PostList;
