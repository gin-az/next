import Heading from "../components/Heading";
import React from "react";
import s from "../styles/Home.module.scss";

const Home = () => (
  <div className={s.wrapper}>
    <Heading text="Hello world!" />{" "}
  </div>
);

export default Home;
