import React from "react";
import Image from "next/image";
import Link from "next/link";
import posts from "../../data/posts";
import PostInfo from "../../components/postInfo";

const Post = ({ post }) => {
  return (
    <div className="container post">
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
    </div>
  );
};

export async function getServerSideProps({ query }) {
  console.log(query.post);

  let post = posts.find((post) => post.id.toString() == query.post);

  return {
    props: { post },
  };
}

export default Post;
