import posts from "../data/posts";
import PostList from "../components/postList";
import FadeInOut from "../animation/FadeInOut";

export default function Home() {
  return (
    <FadeInOut>
      {/* <div className="container"> */}
      <PostList posts={posts} />
      {/* </div> */}
    </FadeInOut>
  );
}
