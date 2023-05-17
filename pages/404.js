import Heading from "../components/Heading";
import React, { useEffect } from "react";
import s from "../styles/404.module.scss";
import { useRouter } from "next/router";

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);

  return (
    <div className={s.wrapper}>
      <div>
        <Heading text="ERROR 404" />
        <Heading tag="h2" text="Увы, страница не найдена." />
      </div>
    </div>
  );
};

export default Error;
