import Heading from "../../components/Heading";
import React from "react";
import Head from "next/head";

import s from "../../styles/Card.module.scss";

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  if (!data) {
    return { notFound: true };
  } //  случае ошибки вернется странится 404
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
        {contacts?.map(({ id, name, email }) => (
          <div key={id} className={s.card}>
            {name} | email: {email}
          </div>
        ))}
      </div>
    </>
  );
};

export default Index;
