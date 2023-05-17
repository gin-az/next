import Heading from "../components/Heading";
import React from "react";
import s from "../styles/Home.module.scss";
import Head from "next/head";

const Home = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <div className={s.wrapper}>
      <Heading text="Hello world!" />{" "}
    </div>
  </>
);

export default Home;
