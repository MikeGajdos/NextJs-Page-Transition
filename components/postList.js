import React from "react";
import Link from "next/link";
import Image from "next/image";
import PostInfo from "./postInfo";
import { motion } from "framer-motion";

const easing = [0.6, -0.05, 0.01, 0.99];
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: easing,
    },
  },
  exit: {
    scale: 0.6,
    y: 100,
    opacity: 0,
    transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] },
  },
};

const staggered = {
  animate: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.5,
    },
  },
  exit: { transition: { staggerChildren: 0.1 } },
};

const PostList = ({ posts }) => {
  return (
    <motion.div initial="initial" animate="animate" exit="exit">
      <motion.div className="posts" variants={staggered}>
        {posts.map((post) => {
          return (
            <motion.div key={post.id} className="post" variants={fadeInUp}>
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
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default PostList;
