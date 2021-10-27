import Image from "next/image";
import Link from "next/link";
import posts from "../../data/posts";
import PostInfo from "../../components/postInfo";
import FadeInOut from "../../animation/FadeInOut";
import { TransitionContext } from "../../animation/TransitionContext";
import { gsap } from "gsap";
import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
  useContext,
} from "react";
import Wrapper from "../../components/wrapper";
const colors = ["red", "green", "blue", "orange", "lightblue"];

const Post = ({ post }) => {
  return (
    <Wrapper background="linear-gradient(90deg,purple,black)">
      <FadeInOut className="container post" delay={1}>
        <div className="cunt">
          <Image
            src={`/image-${post.id}.jpg`}
            alt="cunt"
            width={600}
            height={450}
            //   layout="fill"
            //   objectFit="cover"
          />
        </div>
        <div>
          <PostInfo post={post} />
          <p>{post.text}</p>
        </div>
        <div>
          <Link href="/" passHref>
            <a>Back to list</a>
          </Link>
        </div>
      </FadeInOut>
    </Wrapper>
  );
};

export async function getServerSideProps({ query }) {
  let post = posts.find((post) => post.id.toString() == query.post);
  return {
    props: { post },
  };
}

export default Post;
