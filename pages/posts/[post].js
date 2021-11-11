import React from "react";
import Image from "next/image";
import Link from "next/link";
import posts from "../../data/posts";
import PostInfo from "../../components/postInfo";
import { motion } from "framer-motion";

const pageVariant = {
  exit: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.5,
    },
  },
  enter: {
    opacity: 1,
    transition: {
      // duration: 0.2,
      delayChildren: 0.2,
      staggerChildren: 0.5,
    },
  },
};
let easing = [0.175, 0.85, 0.42, 0.96];

const imageVariants = {
  exit: { x: 150, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.5,
      ease: easing,
    },
  },
};

const textVariants = {
  exit: {
    y: 100,
    opacity: 0,
    transition: {
      // duration: 0.5,
      ease: easing,
    },
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: easing },
  },
};

const backVariants = {
  exit: {
    x: 100,
    opacity: 0,
    transition: {
      // duration: 0.5,
      ease: easing,
    },
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      // duration: 0.5,
      ease: easing,
    },
  },
};

const Post = ({ post }) => {
  return (
    <motion.div
      className="container post"
      initial="exit"
      animate="enter"
      exit="exit"
      variants={pageVariant}
    >
      <motion.div className=" imageWrapper" variants={imageVariants}>
        <Image
          src={`/image-${post.id}.jpg`}
          alt="image"
          width={600}
          height={450}
        />
      </motion.div>

      <motion.div variants={textVariants}>
        <PostInfo post={post} />
        <p>{post.text}</p>
      </motion.div>
      <motion.div variants={backVariants}>
        <Link href="/" passHref>
          <a>Back to list</a>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export async function getStaticPaths() {
  const paths = posts.map((post) => ({
    params: { post: post.id.toString() },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const postID = params.post;
  const post = posts.find((post) => post.id.toString() === postID);
  return {
    props: {
      post: post,
    },
  };
}

export default Post;
