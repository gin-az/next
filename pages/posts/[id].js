import React from "react";
import { PostInfo } from "../../components/PostInfo";
import Head from "next/head";

// Генерация статичных страниц.  SSG
// yarn build создадутся статичные страницы для каждого id
export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  const paths = data.map(({ id }) => ({
    params: { id: id.toString() },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = await response.json();

  if (!data) {
    return { notFound: true };
  } //  в случае ошибки вернется страница 404
  return { props: { post: data } };
};

const Post = ({ post }) => {
  return (
    <>
      <Head>
        <title>Contact page</title>
      </Head>
      <PostInfo post={post} />
    </>
  );
};

export default Post;
