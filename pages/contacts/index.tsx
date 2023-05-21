import Heading from "../../components/Heading";
import React from "react";
import Head from "next/head";

import s from "../../styles/Card.module.scss";
import Link from "next/link";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  if (!data) {
    return { notFound: true };
  } //  в случае ошибки вернется странится 404
  return { props: { contacts: data } };
};

const Index = ({ contacts }) => {
  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading text="CONTACTS" />
      <div>
        <ul>
          {contacts?.map(({ id, name, email }) => (
            <li key={id}>
              <Link href={`contacts/${id}`}>
                <div className={s.card}>
                  {name} | email: {email}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Index;
