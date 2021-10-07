import posts from "../data/posts";
import PostList from "../components/postList";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="container"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.2,
        },
      }}
      exit={{ opacity: 0 }}
    >
      <PostList posts={posts} />
    </motion.div>
  );
}
