import React, { useEffect, useState, useRef, useContext } from "react";
import { TransitionContext } from "../animation/TransitionContext";
import Link from "next/link";
import Image from "next/image";
import PostInfo from "./postInfo";
import FadeInOut from "../animation/FadeInOut";
import { gsap } from "gsap";
import useIsomorphicLayoutEffect from "../animation/useIsomorphicLayoutEffect";

const PostList = ({ posts }) => {
  const { timeline } = useContext(TransitionContext);
  const postAnim = useRef();
  useIsomorphicLayoutEffect(() => {
    gsap.from(postAnim.current.children, {
      opacity: 0,
      delay: 1,
      stagger: 0.5,
    });
    timeline.add(
      gsap.from(postAnim.current.children, {
        opacity: 0,
        stagger: 0.5,
      }),
      0
    );
  }, [timeline]);
  return (
    <>
      <div className="posts" ref={postAnim}>
        {posts.map((post) => {
          return (
            <div key={post.id} className="post">
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
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PostList;
