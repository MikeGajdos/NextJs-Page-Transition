import posts from "../data/posts";

import PostList from "../components/postList";

export default function Home() {
  return (
    <div className="container">
      <PostList posts={posts} />
    </div>
  );
}
