import Heading from "../../components/Heading";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import s from "../../styles/Card.module.scss";

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  if (!data) {
    return { notFound: true };
  } //  в случае ошибки вернется странится 404
  return { props: { posts: data } };
};

const Posts = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Heading text="POSTS LIST" />
      <ul>
        {posts?.map(({ id, title }) => (
          <li key={id}>
            <Link href={`posts/${id}`}>
              <div className={s.card}>{title}</div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Posts;
