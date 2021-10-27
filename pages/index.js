import posts from "../data/posts";
import PostList from "../components/postList";
import FadeInOut from "../animation/FadeInOut";
import { gsap } from "gsap";
import { TransitionContext } from "../animation/TransitionContext";
import { useIsMounted } from "../animation/useIsMounted";
import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
  useContext,
} from "react";
import Wrapper from "../components/wrapper";

export default function Home() {
  const [showChildren, setShowChildren] = useState(false);
  const mounted = useIsMounted();
  const cunt = useRef();
  const { setBackground } = useContext(TransitionContext);
  useEffect(() => {
    setShowChildren(true);
    return () => setShowChildren(false);
  }, []);

  return (
    // <FadeInOut>
    //   {/* <div className="container"> */}
    //   <PostList posts={posts} />
    //   {/* </div> */}
    // </FadeInOut>
    <Wrapper background="linear-gradient(90deg,#110066,black)">
      <FadeInOut className="cuntPolacek" delay={0.5}>
        <PostList posts={posts} />
      </FadeInOut>
    </Wrapper>
  );
}
