import Heading from "../components/Heading";
import React from "react";
import Head from "next/head";

const Posts = () => {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Heading text="POSTS LIST" />
      <Heading
        tag="p"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
        corporis dolorem doloremque harum hic in, ipsum iste laudantium, minima
        modi molestias sunt tenetur? Odit, quibusdam."
      />
    </>
  );
};

export default Posts;
