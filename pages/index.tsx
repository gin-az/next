import Heading from "../components/Heading";
import Head from "next/head";
import Socials from "../components/Socials";

import s from "../styles/Home.module.scss";
import React, { FC } from "react";
import { GetStaticProps } from "next";
import { SocialsProps } from "../types";

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`http://localhost:3000/api/socials/`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { socials: data },
  };
};

const Home: FC<SocialsProps> = ({ socials }) => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <div className={s.wrapper}>
      <Heading text="Next.js" />
      <div>
        <Socials socials={socials} />
      </div>
    </div>
  </>
);

export default Home;
